import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";

// bstlm l userData fe parameter props w b3mlo destruct 3latol lel object l gwah 3shan awdeh lel navbar
export default function Layout({ userData, setUserData }) {
  let navigate = useNavigate();
  function logOut() {
    // hms7 ely fel localstorage
    localStorage.removeItem("userToken");
    // afdy l userData 3shan yfhm eno msh m3molo login
    setUserData(null);
    // navigate("/login");
    navigate("/login");
  
  }
  return (
    <>
      {/* bb3t l user data lel navbar fe props */}
      <Navbar userData={userData} logOut={logOut} />
      <div className="container-fluid m-0 p-0">
        <Outlet></Outlet>
      </div>
      <Footer userData={userData} />
    </>
  );
}
