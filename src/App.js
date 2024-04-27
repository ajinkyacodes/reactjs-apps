import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import EsignatureApp from "./projects/01-E-Signature-App/EsignatureApp";
import RandomizeColors from "./projects/02-Randomize-Colors/RandomizeColors";
import LikePhotoApp from "./projects/03-Like-My-Photo/LikePhotoApp";
import TestimonialsApp from './projects/04-Testimonials-App/TestimonialsApp';
import AlertApp from './projects/05-Alerts/AlertApp';
import TermeratureController from "./projects/06-Temperature-Controller/TermeratureController";
import LightDarkMode from "./projects/07-Light-Dark-Mode/LightDarkMode";
import SlideToUnlock from "./projects/08-Slide-To-Unlock/SlideToUnlock";
import SliderApp from "./projects/09-Slider-App/SliderApp";
import HiddenSearchBar from "./projects/10-Hidden-Search-Bar/HiddenSearchBar";
import PopupApp from "./projects/11-MagicPopup/PopupApp";
import ProgressBarContainer from "./projects/12-Progress-Bars/ProgressBarContainer";
import DialogBox from "./projects/13-Dialog-Box/DialogBox";
import FilterContacts from "./projects/14-Filter-Contacts-App/FilterContacts";
import RegForm from "./projects/15-Reg-Form-Validation/RegForm";

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
        <Route path="/project6" element={<TermeratureController />} />
        <Route path="/project7" element={<LightDarkMode />} />
        <Route path="/project8" element={<SlideToUnlock />} />
        <Route path="/project9" element={<SliderApp />} />
        <Route path="/project10" element={<HiddenSearchBar />} />
        <Route path="/project11" element={<PopupApp />} />
        <Route path="/project12" element={<ProgressBarContainer />} />
        <Route path="/project13" element={<DialogBox />} />
        <Route path="/project14" element={<FilterContacts />} />
        <Route path="/project15" element={<RegForm />} />
      </Routes>
    </div>
  );
}

export default App;
