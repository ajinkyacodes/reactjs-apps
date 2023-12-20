import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import AlertApp from './projects/05-Alerts/AlertApp';
import TestimonialsApp from './projects/04-Testimonials-App/TestimonialsApp';
import LikePhotoApp from "./projects/03-Like-My-Photo/LikePhotoApp";
import RandomizeColors from "./projects/02-Randomize-Colors/RandomizeColors";
import EsignatureApp from "./projects/01-E-Signature-App/EsignatureApp";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<EsignatureApp />} />
        <Route path="/project2" element={<RandomizeColors />} />
        <Route path="/project3" element={<LikePhotoApp />} />
        <Route path="/project4" element={<TestimonialsApp />} />
        <Route path="/project5" element={<AlertApp />} />
      </Routes>
    </div>
  );
}

export default App;
