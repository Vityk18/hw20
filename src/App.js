import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./signIn/signIn.js";
import SignUp from "./signUp/signUp";
// import SignUp from './sign_Up';

function App() {
  return (
    <div className="body">

    <div className="topButtons">
      <Router>
          <nav className="navigation">
            <Link to="/SignIn">Sign In</Link>
            <Link to="/signUp">Sign Up</Link>
          </nav>
          <Routes>
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
          </Routes>
      </Router>
      </div>

      </div>
  );
}

export default App;
