import React, {useState, useEffect} from 'react'
import Title from "../../components/Title";
import Button from "../../components/Button";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaUserAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";

export default function TestimonialsApp() {
  
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container">
      <Title text={"Testimonials App"} />
      <Button text={"Posts"} classes={"btn-info"} icon={<BsFillFileEarmarkPostFill className="mr-1"/>} onClick={()=>setTestimonials("Posts")} />
      <Button text={"Users"} classes={"btn-info"} icon={<FaUserAlt className="mr-1"/>} onClick={()=>setTestimonials("Users")} />
      <Button text={"Comments"} classes={"btn-info"} icon={<BiCommentDetail className="mr-1"/>} onClick={()=>setTestimonials("Comments")} />
      <Title text={!testimonials ? "Select from above!" : testimonials} classes={"subtitle text-primary"}/>
     
      {!items
        ? null
        : items.map((item) => {
            return (
            <div className="card card-primary mb-2" key={item.id}>              
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
            </div>
          );
      })}
    </div>
  );
}
