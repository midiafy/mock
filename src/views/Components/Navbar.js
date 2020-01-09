import React from "react";

const Navbar = () => (
  <>
    <header className="navbar is-spaced is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/logo.png" alt="midiafy" />
          </a>
          <span className="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active" href="#/">
              conheça
            </a>
            <a className="navbar-item" href="#/">
              sobre nós
            </a>
            <a className="navbar-item" href="#/">
              preço
            </a>
            <span className="navbar-item">
              <a
                className="button is-primary is-inverted is-outlined"
                href="#/"
              >
                entrar
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Navbar;
