import React from "react";
import './grid.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Catalog from "pages/Catalog";
import Login from "pages/Login";

const Detail = React.lazy(() => import('pages/Detail'))

function App() {
  return (
    <>
      <React.Suspense fallback={<h1 style={{ textAlign: 'center' }}>Loading...</h1>}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:category/:id' element={<Detail />} />
          <Route path='/:category' element={<Catalog />} />
          <Route path='/:category/search/:keyword' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Navigate to='/home' />} />
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </React.Suspense>
    </>
  )
}


export default App;
