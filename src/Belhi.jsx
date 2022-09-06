import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { addBelhi } from "./feauters/belhiSlice";

const Belhi = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    dispatch(addBelhi({ name, text }));
    setName("");
    setText("");
  };
  return (
    <div>
      <div>новая белха</div>
      <input
        onChange={(e) => handleChangeName(e)}
        placeholder="название белхи"
        value={name}
        type="text"
      />
      <input
        onChange={(e) => handleChangeText(e)}
        placeholder="описание белхи"
        value={text}
        type="text"
      />
      <button onClick={() => handleClick()}>добавить</button>
    </div>
  );
};

export default Belhi;
