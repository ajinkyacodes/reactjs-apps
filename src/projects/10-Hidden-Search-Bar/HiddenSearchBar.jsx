import React, { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

export default function HiddenSearchBar() {
  const [uiProps, setUiProps] = useState({
    bg: "purple",
    shadow: "",
    transition: "all .3s ease",
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: `#fff`,
  });

  let body = document.body.style;
  let inputStyle = {
    margin: "10vh 25vw",
    wifth: "20vh",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: "1.3rem",
    color: "#eee",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiProps.opacity,
    transition: "all .3s ease",
  };

  let BsSearchStyle = {
    color: "#fff",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  };

  const inputEl = useRef(null);

  useEffect(
    () => {
      body.background = uiProps.bg;
      body.boxShadow = uiProps.shadow;
      body.transition = uiProps.transition;
      uiProps.showSearchBar && inputEl.current.focus();
    },
    [uiProps.shadow],
    [uiProps.showSearchBar]
  );

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    });
  };

  const handleSearchFocus = () => {
    setUiProps({
      shadow: "inset 0-60vh 30vw 200px rgba(0,0,0,0.8)",
      borderBottomColor: "green",
    });
  };

  const handleSearchBlur = () => {
    setUiProps({
      shadow: "none",
      opacity: 0,
      borderBottomColor: "#fff",
      showSearchIcon: true,
    });
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={BsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type="text"
          placeholder="Search"
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}
