import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { fetchBelhi, followThunk } from "./feauters/belhiSlice";

const NewBelhi = () => {
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
    <div>
      {bolh.map((item) => {
        return (
          <>
            <div>{item.name}</div>
            <div>{`белхи открыл ${item.creater.login}`}</div>
            <div>{`описание белхов: ${item.text}`}</div>
            <div>{`подписанные пользователи: ${item.followers.map(
              (element) => element.login
            )}`}</div>
            <button onClick={() => handleClick(item._id)}>
              подписаться на белхи
            </button>
          </>
        );
      })}
    </div>
  );
};

export default NewBelhi;
