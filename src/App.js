import "./App.css";
import './grid.css';
import Home from "components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Detail from "components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path='/detail/:category/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}


export default App;
