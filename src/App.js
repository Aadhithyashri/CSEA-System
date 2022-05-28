import "./App.css";
import NavBar from "./components/NavBar";
import NavBarMain from "./components/NavBarMain";
import Content from "./components/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBarMain />
      <Content />
    </React.Fragment>
  );
};
