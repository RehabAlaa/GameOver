import logo from "./../../assets/logo.png";
import Axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Login({ decodeUserData }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorList, setErrorList] = useState([]);
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  async function sendUserDataToApi() {
    let { data } = await Axios.post(
      "https://sticky-note-fe.vercel.app/signin",
      user
    );

    if (data.message === "success") {
      setLoading(false);
      // b5zn l token fel localstorage 3shan a3rf mnha lw mwgoda eno 3amel login wla la2 w atl3 mnha user data
      localStorage.setItem("userToken", data.token);

      // bnady 3al func de b3d ma at2kd eno 3ml login w api rdt 3leh b eno ssa7 3shan a5od l token mnha w a3mlo decode
      decodeUserData();
      // navigate to home component
      navigate("/home");
    } else {
      setLoading(false);

      setError(data.message);
    }
  }
  function validateLoginForm() {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,8}$/),
    });
    return scheme.validate(user, { abortEarly: false });
  }
  function submitLoginForm(e) {
    e.preventDefault();
    setLoading(true);
    let validation = validateLoginForm();
    if (validation.error) {
      setErrorList(validation.error.details);
    } else {
      sendUserDataToApi();
    }
  }
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row ">
          <div className="col-md-6 bg-register-image">
            {/* <img
              src="./../../assets/gaming.jpg"
              alt="gaming"
              className="w-100"
            /> */}
          </div>
          <div className="col-md-6 gray py-5  text-center">
            <img src={logo} alt="" className="w-25" />
            <h2 className="text-gray mb-4 text-center">Log in to GameOver</h2>
            {error ? (
              <div className="alert text-white bg-danger">ERROR! {error}</div>
            ) : (
              ""
            )}
            <form onSubmit={submitLoginForm}>
              <div className="form-group mb-3">
                <input
                  onChange={getUserData}
                  type="email"
                  className="form-control my-inputs"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                />
                <p className="text-danger">
                  {
                    errorList.filter(
                      (error) => error.context.label === "email"
                    )[0]?.message
                  }
                </p>
              </div>

              <div className="form-group mb-3">
                <input
                  onChange={getUserData}
                  type="password"
                  className="form-control my-inputs"
                  placeholder="Password"
                  name="password"
                  id="password"
                />
                <p className="text-danger">
                  {errorList.filter(
                    (error) => error.context.label === "password"
                  )[0]
                    ? '"password" should start with uppercase the form 3 and 8 characters lowercase'
                    : ""}
                </p>
              </div>
              <button
                type="submit"
                className="btn btn-submit text-white submitButton w-100 mb-3 py-2 btn-user btn-block"
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
            <hr className="text-light" />

            <a
              className="text-primary text-decoration-none small mx-1"
              href="https://policies.google.com/privacy"
            >
              Forgot Password?
            </a>

            <p className="small text-center text-muted">
              Not a member yet?
              <Link
                className="ms-2 text-primary text-decoration-none"
                to="/register"
              >
                Create Account
                <i className="fas fa-chevron-right small"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
