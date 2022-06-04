import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "redux/auth/authSlice";

import "./header.css";

function Header(props) {
  const auth = getAuth();
  const dispatch = useDispatch();

  const handleMenu = () => {
    const btn = document.getElementById("hamburger-menu");
    btn.classList.toggle("active");
    document.getElementById("nav-menu").classList.toggle("active");
    console.log(btn);
  };

  const signoutApi = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser())
    } catch (err) {
      console.log('lỗi log out', err);
    }
  }

  const isUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="nav-wrapper">
      <div className="container">
        <div className="nav">
          <Link to="/" className="logo">
            <i className="bx bx-movie-play bx-tada main-color"></i>Ky
            <span className="main-color">l</span>e
          </Link>
          <ul className="nav-menu" id="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
            <li>
              <Link to="/tv">Tv Series</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {!isUser && (
                <Link to="/login" className="btn btn-hover">
                  <span>Sign in</span>
                </Link>
              )}
              {isUser && (
                <Link to="/login" className="btn btn-hover">
                  <span onClick={signoutApi}>{isUser.displayName}</span>
                </Link>
              )}
            </li>
          </ul>

          <div
            className="hamburger-menu"
            id="hamburger-menu"
            onClick={handleMenu}
          >
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
