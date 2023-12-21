import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/moon.jpg";
import HomeScreenImg from "./img/home.jpg";

export default function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `Url(${LockScreenImg}) center/cover no-repeat`
  });
  const [showLockSlider, setShowLockSlider] = useState(true);

  return (
    <div
      className="container text-center d-flex flex-column border-20 shadow-md"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }} >{uiProps.uiText}</h1>
      {showLockSlider ? (
        <LockSlider width={"250px"} />
      ) : (
        <AiFillUnlock className="unlockIcon" />
      )}
    </div>
  );
}
