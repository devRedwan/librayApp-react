import React from "react";
import Book from "./UI/Book";
import { books } from "../data.js";

export default function Featured() {
  const fiveStarBooks = books.filter((book) => book.rating === 5).slice(0, 4);

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {fiveStarBooks.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
