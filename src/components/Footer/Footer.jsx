import React from "react";
import logo from "../../assets/logo.png";
export default function Footer({ userData }) {
  return (
    <>
      {userData ? (
        <footer className="deep-dark pt-3 ">
          <div className="container text-start">
            <div className="row text-md-start mt-3 pb-5 text-sm-center">
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p>
                  <a href="https://www.freetogame.com/about">About</a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/api-doc">API</a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/contact">Contact Us</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p>
                  <a href="https://www.freetogame.com/faq">Help/FAQ</a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/support">
                    Support & Bugs
                  </a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/feedback">
                    Feature Request
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <p>
                  <a href="https://www.freetogame.com/privacy-policy">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/cookies-policy">
                    Cookies Policy
                  </a>
                </p>
                <p>
                  <a href="https://www.freetogame.com/terms-of-use">
                    Terms of Use
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 text-center">
                <img src={logo} className="w-50" alt="footer" />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-md-7 col-lg-8 text-center">
                <p className="text-md-left small">
                  © 2022 Digiwalls Media, all rights reserved. All trademarks
                  are property of their respective owners.
                </p>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-end text-md-right">
                  <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item pe-4">
                      <a href="https://www.facebook.com/FreeToGameOfficial/">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item pe-4">
                      <a href="https://twitter.com/FreeToGamecom">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.freetogame.com/rss/games">
                        <i className="fas fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        ""
      )}
    </>
  );
}
