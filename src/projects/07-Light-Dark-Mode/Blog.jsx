import React, { useContext } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { ThemeContext } from "./context/theme-context";
export default function Blog() {
  const {theme, changeTheme} = useContext(ThemeContext);
  return (
    <div className="container p-1">
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{position: "absolute", top:10, right: 10}}>
        <Button text={theme === "dark" ? "Light" : "Dark"} classes={ `${theme==="dark" && "btn-light"} btn-sm`} onClick={changeTheme} />
      </span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloremque vel doloribus deserunt provident at aliquam repudiandae ullam cum eos et facere atque nisi iusto totam eius, unde impedit vitae!</p>
    </div>
  );
}
