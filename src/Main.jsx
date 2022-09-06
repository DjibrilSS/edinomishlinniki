import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { fetchBelhi } from "./feauters/belhiSlice";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBelhi());
  }, []);
  const belhi = useSelector((state) => state.belhi.belhi);
  return (
    <div>
      <div>
        {belhi.map((item) => {
          return (
            <div>
              <div>{item.creater.login}</div>
              <div>{item.name}</div>
              <div>{`количество белхлой:${item.followers.length}`}</div>
              <Link to={`/belhi/${item._id}`}>
                <button>Подробнее</button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/create"><button>Добавить свою белху</button></Link>
    </div>
  );
};

export default Main;
