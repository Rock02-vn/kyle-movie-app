import "./App.css";
import './grid.css';
import Home from "./components/Home";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}


export default App;
