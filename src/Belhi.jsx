import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { addBelhi } from "./feauters/belhiSlice";

const Belhi = () => {
  const token = useSelector((state) => state.application.token);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    dispatch(addBelhi({ name, text, count }));
    setName("");
    setText("");
  };
  const handleMinus = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="loginDiv">
      <div className="title">новая белха</div>
      <input
        className="input"
        onChange={(e) => handleChangeName(e)}
        placeholder="название белхи"
        value={name}
        type="text"
      />
      <input
        className="input"
        onChange={(e) => handleChangeText(e)}
        placeholder="описание белхи"
        value={text}
        type="text"
      />
      <div className="count">
        количество требуемых белхло:
        <div className="count">
          <button onClick={() => handleMinus()} className="span">
            -
          </button>
          <div>{`  ${count}  `}</div>

          <button onClick={() => handlePlus()} className="spanr">
            +
          </button>
        </div>
      </div>

      <button
        disabled={token === null}
        className="button"
        onClick={() => handleClick()}
      >
        добавить
      </button>
    </div>
  );
};

export default Belhi;
