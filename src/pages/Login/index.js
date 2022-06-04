import Header from "components/Header";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "redux/auth/authSlice";
import "./login.css";

import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";

const Detail = () => {
  const dispatch = useDispatch()

  const providerGoogle = new GoogleAuthProvider();
  const providerFb = new FacebookAuthProvider();
  const auth = getAuth();


  const googleApi = async () => {
    try {
      await signInWithPopup(auth, providerGoogle)
    } catch (err) {
      console.log('lỗi khi đăng nhập', err);
    }
  }

  const facebookApi = async () => {
    try {
      await signInWithPopup(auth, providerFb)
    } catch (err) {
      console.log('lỗi khi đăng nhập', err);
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      dispatch(addUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
      }))
    } else {
      console.log('user log out');
    }
  });

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-method">
          <button className='login-method-google login-social-btn' onClick={googleApi}>Google</button>
          <button className='login-method-facebook login-social-btn' onClick={facebookApi}>Facebook</button>
        </div>
      </div>

    </>
  );
};

export default Detail;
