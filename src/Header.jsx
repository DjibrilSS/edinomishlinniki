import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((state) => state.application.token);
  const handleExit = () => {
    localStorage.clear();
    window.location.reload();
  };
  console.log(token);
  return (
    <div className="headerdiv">
      <Link to="/">
        <h1 className="belhi">BELHI</h1>
      </Link>
      {token === null ? (
        <p>
          <Link to="/login">Войти</Link> или{" "}
          <Link to="/auth">зарегистрироваться</Link>
        </p>
      ) : (
        <p>
          <div>
            Вы вошли в аккаунт{" "}
            <button onClick={() => handleExit()}>Выйти</button>
          </div>
        </p>
      )}
    </div>
  );
};

export default Header;
