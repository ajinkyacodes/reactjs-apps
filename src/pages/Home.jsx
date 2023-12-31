import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";

export default function List() {
  let bodyHome = document.querySelector("body");
  bodyHome.style.background = "transparent";
  return (
    <div className="container">
      <Title text="Applications List" classes={"title  text-info"} />
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/project1"><Title classes={"fs-lg my-1"} text={"01. Esignature App"}/></Link>
          </li>
          <li>
            <Link to="/project2"><Title classes={"fs-lg my-1"} text={"02. Randomize Colors"}/></Link>
          </li>
          <li>
            <Link to="/project3"><Title classes={"fs-lg my-1"} text={"03. Like My Photo"}/></Link>
          </li>
          <li>
            <Link to="/project4"><Title classes={"fs-lg my-1"} text={"04. Testimonials App"}/></Link>
          </li>
          <li>
            <Link to="/project5"><Title classes={"fs-lg my-1"} text={"05. Alerts App"}/></Link>
          </li>
          <li>
            <Link to="/project6"><Title classes={"fs-lg my-1"} text={"06. Temperature Controller"}/></Link>
          </li>
          <li>
            <Link to="/project7"><Title classes={"fs-lg my-1"} text={"07. Light Dark Mode"}/></Link>
          </li>
          <li>
            <Link to="/project8"><Title classes={"fs-lg my-1"} text={"08. Slide To Unlock"}/></Link>
          </li>
          <li>
            <Link to="/project9"><Title classes={"fs-lg my-1"} text={"09. Slider App"}/></Link>
          </li>
          <li>
            <Link to="/project10"><Title classes={"fs-lg my-1"} text={"10. Hidden Search Bar"}/></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
