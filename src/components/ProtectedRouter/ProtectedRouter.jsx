// import React from "react";
import { useNavigate } from "react-router-dom";
// import Login from "../Login/Login";

export default function ProtectedRouter({ children }) {
  let navigate = useNavigate();
  if (!localStorage.getItem("userToken")) {
    return navigate("/login");
  } else {
    return children;
  }
}
