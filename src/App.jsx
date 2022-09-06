import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { Routes, Route, Navigate } from "react-router-dom";
import NewBelhi from "./NewBelhi";
import Belhi from "./Belhi";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/belhi/:id" element={<NewBelhi />} />
        <Route path="/create" element={<Belhi />} />
      </Routes>
    </>
  );
}

export default App;
