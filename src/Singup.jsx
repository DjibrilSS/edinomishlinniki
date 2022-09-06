import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authThunk } from "./feauters/applicationSlice";

const Singup = () => {
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
  };

  return (
    <div>
      <input
        placeholder="ЛОГИН"
        onChange={(e) => handleChange(e)}
        value={login}
        type="text"
      />
      <input
        placeholder="ПАРОЛЬ"
        onChange={(e) => handleChangePas(e)}
        value={password}
        type="text"
      />
      <button onClick={() => handleClick()}>РЕГИСТРАЦИЯ</button>
    </div>
  );
};

export default Singup;
