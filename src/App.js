import "./App.css";
import NavBar from "./components/NavBar";
import NavBarMain from "./components/NavBarMain";
import Content from "./components/Content";
import ContentEvent from "./components/ContentEvent";
import ContentGallery from "./components/ContentGallery";
import ContentProposal from "./components/ContentProposal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App" style={{ overflowX: "hidden", position: "relative" }}>
      <BrowserRouter>
        <NavBar />
        <NavBarMain />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/event" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const HomePage = () => {
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  );
};

export const Events = () => {
  return (
    <React.Fragment>
      <ContentEvent />
    </React.Fragment>
  );
};

export const Gallery = () => {
  return (
    <React.Fragment>
      <ContentGallery />
    </React.Fragment>
  );
};

export const Proposal = () => {
  return (
    <React.Fragment>
      <ContentProposal />
    </React.Fragment>
  );
};
