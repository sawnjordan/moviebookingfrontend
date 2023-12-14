import React from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer_new">
        <div className="container-fluid">
          <section className="row">
            <article className="col-12">
              <div className="footer_new_items">
                <figure className="footer_new_logo">
                  <img
                    src={logo}
                    alt="Teamquest Private Limited QFX Cinemas"
                    className=""
                  />
                </figure>
                <figure className="sm_icons">
                  <div className="footer-sm-links py-0"></div>
                </figure>
                <h6>© All Rights Reserved</h6>
              </div>
            </article>
          </section>
        </div>
      </footer>
    </>
  );
};
