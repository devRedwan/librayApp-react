import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Most Awarded ONline LIbrary Platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse boos</button>
            </a>
          </div>
          <figutre className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figutre>
        </div>
      </header>
    </section>
  );
}
