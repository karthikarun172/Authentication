import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.removeItem("Token");
    navigate("/login");
  };
  return (
    <div>
      <div>DashBoard</div>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
}

export default DashBoard;
