import React from "react";
import "./footer.css";
import google from "../../assets/images/google-play.png";
import appStore from "../../assets/images/app-store.png";

function Footer(props) {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-6 col-sm-12">
              <div className="content">
                <a href="=" className="logo">
                  <i className="bx bx-movie-play bx-tada main-color"></i>Ky
                  <span className="main-color">l</span>e
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  veniam ex quos hic id nobis beatae earum sapiente! Quod ipsa
                  exercitationem officiis non error illum minima iusto et.
                  Dolores, quibusdam?
                </p>
                <div className="social-list">
                  <a href="=" className="social-item">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="=" className="social-item">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="=" className="social-item">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-6 col-sm-12">
              <div className="row">
                <div className="col-3 col-md-6 col-sm-6">
                  <div className="content">
                    <p>
                      <b>Kyle</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="=">About us</a>
                      </li>
                      <li>
                        <a href="=">My profile</a>
                      </li>
                      <li>
                        <a href="=">Pricing plans</a>
                      </li>
                      <li>
                        <a href="=">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className="content">
                    <p>
                      <b>Browse</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="=">About us</a>
                      </li>
                      <li>
                        <a href="=">My profile</a>
                      </li>
                      <li>
                        <a href="=">Pricing plans</a>
                      </li>
                      <li>
                        <a href="=">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className="content">
                    <p>
                      <b>Help</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="=">About us</a>
                      </li>
                      <li>
                        <a href="=">My profile</a>
                      </li>
                      <li>
                        <a href="=">Pricing plans</a>
                      </li>
                      <li>
                        <a href="=">Contacts</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 col-md-6 col-sm-6">
                  <div className="content">
                    <p>
                      <b>Download app</b>
                    </p>
                    <ul className="footer-menu">
                      <li>
                        <a href="=">
                          <img src={google} alt="google" />
                        </a>
                      </li>
                      <li>
                        <a href="=">
                          <img src={appStore} alt="appStore" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">Design by : Kyle</div>
    </>
  );
}

export default Footer;
