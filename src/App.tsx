import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; //rød streg D:
import MiraCrownHelper from "./pages/MiraCrownHelper/MiraCrownHelper";
import Contact from "./pages/Contact"; //rød streg D:

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MiraCrownHelper" element={<MiraCrownHelper />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
