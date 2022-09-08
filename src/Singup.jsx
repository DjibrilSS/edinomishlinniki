import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authThunk } from "./feauters/applicationSlice";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePas = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    setLogin("");
    setPassword("");
    dispatch(authThunk({ login, password }));
    navigate("/login");
  };

  return (
    <div className="loginDiv">
      <input
        className="input"
        placeholder="ЛОГИН"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        className="input"
        placeholder="ПАРОЛЬ"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <button className="button" onClick={() => handleClick()}>
        Регистрация
      </button>
    </div>
  );
};

export default Singup;
