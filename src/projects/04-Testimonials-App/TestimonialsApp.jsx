import React from 'react'
import Title from "../../components/Title";
import Button from "../../components/Button";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";

export default function TestimonialsApp() {
  function handleClick(){
    console.log("My Click");
  }
  return (
    <div className="container">
      <Title text={"Testimonials App"} />
      <Button text={"Posts"} classes={"btn-info"} icon={<BsFillFileEarmarkPostFill className="mr-1"/>} onClick={handleClick} />
      <Button text={"Users"} classes={"btn-info"} icon={<FaUserAlt className="mr-1"/>} onClick={handleClick} />
      <Button text={"Comments"} classes={"btn-info"} icon={<BiCommentDetail className="mr-1"/>} onClick={handleClick} />
    </div>
  )
}
