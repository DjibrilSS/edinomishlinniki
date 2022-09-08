import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./feauters/applicationSlice";

const Singin = () => {
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
    dispatch(loginThunk({ login, password }));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
      <div></div>
      <button className="button" onClick={() => handleClick()}>
        Войти
      </button>
    </div>
  );
};

export default Singin;
