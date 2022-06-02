import React from "react";
import "./App.css";
import './grid.css';
import Home from "components/Home";
import { Navigate, Route, Routes } from "react-router-dom";
// import Detail from "components/Detail";
import About from "components/About";
const Detail = React.lazy(() => import('components/Detail'))

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:category/:id' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <Detail />
          </React.Suspense>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </>
  )
}


export default App;
