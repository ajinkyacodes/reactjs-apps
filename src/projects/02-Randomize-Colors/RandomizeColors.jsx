import React from 'react'
import Title from '../../components/Title'

export default function RandomizeColors() {
    function handleClick(event) {
        // console.log(event.target);
        const heading = document.querySelector("h1");
        heading.style.color = getRandomColor();
    }

    const handleSecClick = (e) => {
        // console.log(e.target);
        // console.log(getRandomColor());
        let body = document.querySelector("body");
        body.style.background = getRandomColor();
        e.target.style.backgroundColor = getRandomColor();
    };

    function getRandomColor() {
        let letters = "01234567899ABCDEF";
        let color = "#"
        for(let i=0; i<6; i++) {
            color+= letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
    <div className="container m-auto text-center">
        <Title text={"Randomize Color"} classes={"mb-4"} />
        <button className='btn btn-danget' onClick={(e) => handleClick(e)}>Click me</button>
        <button className='btn btn-success' onClick={handleSecClick}>Click me</button>
        <button className='btn btn-primary' onClick={handleSecClick}>Click me</button>
        <button className='btn btn-warning' onClick={handleSecClick}>Click me</button>
    </div>
    );
}
