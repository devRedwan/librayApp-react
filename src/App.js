import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { books } from "./data";
import "./index.css";
import BookInfo from "./pages/BookInfo";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, { ...book, quantity: 1 }]);
  };

  const changeQuantity = (book, quantity) => {
    setCart(
      cart.map((item) =>
        +item.id === +book.id ? { ...item, quantity: +quantity } : item
      )
    );
  };

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item.id !== book.id && item));
  };

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
