import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { books } from "./data";
import "./index.css";
import BookInfo from "./pages/BookInfo";
import Books from "./pages/Books";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact render={() => <Books books={books} />} />
          <Route path="/books/1" render={() => <BookInfo books={books} />} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
