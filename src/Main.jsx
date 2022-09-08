import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { fetchBelhi } from "./feauters/belhiSlice";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const belhi = useSelector((state) => state.belhi.belhi);
  useEffect(() => {
    dispatch(fetchBelhi());
  }, []);

  return (
    <div className="div">
      <div className="mainDiv">
        {belhi.map((item) => {
          return (
            <div className={item.count < item.followers.length ? "cartFull" :"cart"}>
              <div className="title">{item.creater.login}</div>
              <div className="text">{item.name}</div>
              <div className="count">{`требуемое количество белхлой:${item.count}`}</div>
              <div className="count">{`количество белхлой:${
                item.followers.length - 1
              }`}</div>
              <Link to={`/belhi/${item._id}`}>
                <button className="cartButton">Подробнее</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/create">
        <button className="newButton">Добавить свою белху</button>
      </Link>
    </div>
  );
};

export default Main;
