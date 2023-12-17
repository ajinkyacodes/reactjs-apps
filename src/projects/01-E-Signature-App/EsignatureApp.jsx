import React, { useState } from "react";
import Title from "../../components/Title";

export default function EsignatureApp() {
  const [name, setName] = useState("Your signature");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35em 0",
  };
  document.body.style.background = "#eee";
  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        repellat quae corporis cum id natus perferendis velit, expedita
        veritatis eveniet magnam commodi, cupiditate fuga quis. Nisi
        reprehenderit in ex quasi!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange} />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
