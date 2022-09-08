import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { fetchBelhi, followThunk } from "./feauters/belhiSlice";

const NewBelhi = () => {
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();
  const id = useParams();
  const bolh = useSelector((state) =>
    state.belhi.belhi.filter((item) => item._id === id.id)
  );
  const render = useSelector((state) => state.belhi.render);

  useEffect(() => {
    dispatch(fetchBelhi());
  }, [render]);
  const handleClick = (data) => {
    dispatch(followThunk(data));
  };
  return (
    <div className="bolhDiv">
      {bolh.map((item) => {
        return (
          <>
            <div className="title">{item.name}</div>
            <div className="title">{`белхи открыл ${item.creater.login}`}</div>
            <div className="title">{`описание белхов: ${item.text}`}</div>
            <div className="title">{`подписанные пользователи: ${item.followers
              .filter((el, index) => index !== 0)
              .map((element) => element.login)}`}</div>
            <button
              disabled={item.count < item.followers.length || token === null}
              className="bolhButton"
              onClick={() => handleClick(item._id)}
            >
              подписаться на белхи
            </button>
          </>
        );
      })}
    </div>
  );
};

export default NewBelhi;
