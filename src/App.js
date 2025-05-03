import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import SingleUser from "./components/SingleUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateForm from "./components/CreateForm";
import { Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light poorna"
        style={{
          position: "fixed",
          paddingLeft: "200px",
          justifyItems: "center",
        }}
      >
        <div className="container" style={{ allignItems: "center" }}>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/about">
            About
          </Link>
          <Link className="navbar-brand" to="/users">
            Users
          </Link>
          <Link className="navbar-brand" to="/create">
            Create
          </Link>
          <Link className="navbar-brand" to="/users/:id">
            Single User
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Routes>
    </Router>
  );
}

export default App;
