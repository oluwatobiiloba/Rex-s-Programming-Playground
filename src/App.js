import './App.css';
import './Nav.css';

import {NavBar} from "./components/NavBar/NavBar";
import {HomePage} from "./pages/homePage/HomePage";
import React from "react";

function App() {
  return (
      <div className="body">
        <NavBar></NavBar>
      <HomePage></HomePage>
      </div>
  );
}


export default App;
