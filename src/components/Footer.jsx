import React from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer class="footer_new">
        <div class="container-fluid">
          <section class="row">
            <article class="col-12">
              <div class="footer_new_items">
                <figure class="footer_new_logo">
                  <img
                    src={logo}
                    alt="Teamquest Private Limited QFX Cinemas"
                    class=""
                  />
                </figure>
                <figure class="sm_icons">
                  <div class="footer-sm-links py-0"></div>
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
