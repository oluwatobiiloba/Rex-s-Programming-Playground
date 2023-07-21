import {BrowserRouter, Route, Routes} from "react-router-dom";

import {NavBar} from "./components/NavBar/NavBar";
import {HomePage} from "./pages/homePage/HomePage";
import React from "react";
import {Projects} from "./pages/projects/Projects";
import {ContactMe} from "./pages/contact_me/ContactMe";
import './app.css';
import {ErrorPage} from "./pages/errorPage/ErrorPage";


function App() {
    return (
      <div className="body dark:bg-cyan-950 bg-amber-50 w-full h-[100vh]" >
          <BrowserRouter>
              <NavBar/>
              <Routes>
                  <Route path={'/'} element = {<HomePage/>} ></Route>
                  <Route path={'/projects'} element={<Projects/>} ></Route>
                  <Route path={'/contact-me'}  element={<ContactMe  />}></Route>
                  <Route path={'*'} element = {<ErrorPage/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}


export default App;
