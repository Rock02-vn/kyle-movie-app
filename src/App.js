import React from "react";
import "./App.css";
import './grid.css';
import Home from "pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "pages/About";
import Catalog from "pages/Catalog";
const Detail = React.lazy(() => import('pages/Detail'))

function App() {
  return (
    <>
      <React.Suspense fallback={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:category/:id' element={<Detail />} />
          <Route path='/:category' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Navigate to='/home' />} />
        </Routes>
      </React.Suspense>
    </>
  )
}


export default App;
