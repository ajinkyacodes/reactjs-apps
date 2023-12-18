import React from 'react'

export default function Button({ text="click", classes, icon, onClick }) {
  return (
    <button className={`btn ${classes}`} onClick={onClick}>{icon}{text}</button>
  )
}
