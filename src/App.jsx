import "./App.css";
import { useSelector } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import { Routes, Route, Navigate } from "react-router-dom";
import NewBelhi from "./NewBelhi";
import Belhi from "./Belhi";
import Singin from "./Singin";
import Singup from "./Singup";

function App() {
  const token = useSelector((state) => state.application.token);
  if (token === null) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/belhi/:id" element={<NewBelhi />} />
          <Route path="/create" element={<Belhi />} />
          <Route path="/login" element={<Singin />} />
          <Route path="/auth" element={<Singup />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/belhi/:id" element={<NewBelhi />} />
        <Route path="/create" element={<Belhi />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/auth" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
