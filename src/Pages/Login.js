import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import "./Login.css";

function Login() {
  const initialValue = { Phone: "", Password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://guarded-crag-39247.herokuapp.com/api/login", formValues)
      .then((res) => window.localStorage.setItem("Token", res.data.token))
      .then(() => navigate("/"));
  };

  return (
    <div className="LoginPageContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h4>login</h4>
        <Input
          placeholder="Phone"
          errorMessage="phone ID is wrong"
          classNameContainer="InputContainer"
          classNameInput="Input"
          classNameErrorMSG="InputErrorMSG"
          onChange={handleChange}
          name="Phone"
          value={formValues.Phone}
        />
        <Input
          placeholder="Password"
          type="Password"
          errorMessage="email ID is wrong"
          classNameContainer="InputContainer"
          classNameInput="Input"
          classNameErrorMSG="InputErrorMSG"
          onChange={handleChange}
          name="Password"
          value={formValues.Password}
        />
        <button className="BTN">Submit</button>
      </form>
    </div>
  );
}

export default Login;
