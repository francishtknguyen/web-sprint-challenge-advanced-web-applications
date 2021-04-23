import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/" onClick={handleLogout}>
            logout
          </a>
        </header>
        <PrivateRoute path="/bubblepage" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
