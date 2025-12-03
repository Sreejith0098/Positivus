import React from "react";
import "../components/Header.css";

const Header = () => {
  return (
    <header className="container py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="m-0 logo">Positivus</h1>
        <nav className="d-none d-md-flex gap-4 align-items-center">
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Use Cases</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
          <a className="btn btn-outline-dark px-3" href="">
            Request a Quote
          </a>
        </nav>
        <button className="d-md-none menu-btn">☰</button>
      </div>
    </header>
  );
};

export default Header;
