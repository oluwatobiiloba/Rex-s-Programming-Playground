import {BrowserRouter, Route, Routes} from "react-router-dom";


import {NavBar} from "./components/NavBar/NavBar";
import {HomePage} from "./pages/homePage/HomePage";
import React from "react";
import {Projects} from "./pages/projects/Projects";
import {ContactMe} from "./pages/contact_me/ContactMe";


function App() {
  return (
      <div className="body">
          <NavBar/>
          <Routes>
              <Route path={"/"} element = {<HomePage/>} ></Route>
              <Route path={'/projects'} element={<Projects/>} ></Route>
              <Route path={'/contact-me'}  element={<ContactMe />}></Route>
          </Routes>
      </div>
  );
}


export default App;
