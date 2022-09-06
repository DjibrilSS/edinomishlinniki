import React from "react";
import Singin from "./Singin";
import Singup from "./Singup";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerdiv">
      <Link to="/">
        <h1 className="belhi">BELHI</h1>
      </Link>
      <Singin />
      <Singup />
    </div>
  );
};

export default Header;
