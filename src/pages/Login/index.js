import Header from "components/Header";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "redux/auth/authSlice";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const Detail = () => {
  const dispatch = useDispatch();

  const providerGoogle = new GoogleAuthProvider();
  const providerFb = new FacebookAuthProvider();
  const auth = getAuth();

  const googleApi = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
      return toast.success("Login success!");
    } catch (err) {
      return toast.error(err.message);
    }
  };

  const facebookApi = async () => {
    try {
      await signInWithPopup(auth, providerFb);
      return toast.success("Login success!");
    } catch (err) {
      return toast.error(err.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          })
        );
      }
    });
  }, []);

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="login-method">
          <button
            className="login-method-google login-social-btn"
            onClick={googleApi}
          >
            Google
          </button>
          <button
            className="login-method-facebook login-social-btn"
            onClick={facebookApi}
          >
            Facebook
          </button>
        </div>
      </div>
      <div>
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
};

export default Detail;
