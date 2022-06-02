import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const [Register, setRegister] = useState([]);

  const handleLogOut = () => {
    window.localStorage.removeItem("Token");
    navigate("/login");
  };

  const getData = async () => {
    const { data } = await axios.get(
      "https://guarded-crag-39247.herokuapp.com/api/register",
      {
        headers: { "x-auth-token": localStorage.getItem("Token") },
      }
    );
    setRegister(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>DashBoard</div>
      <div>
        <ul>
          {Register.map((c) => (
            <li key={c._id}>{c.Username}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
}

export default DashBoard;
