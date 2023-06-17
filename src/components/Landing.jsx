import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Most Awarded Online Library Platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>

            <a className="btn" href="#features">
              Browse books
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}
