import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateForm from "./components/CreateForm";
import { Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav class="hi" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/about">
            About
          </Link>
          <Link className="navbar-brand" to="/create">
            Create
          </Link>
        </div>
      </nav>
      <Users />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
