import React from 'react'
import Button from '../../components/Button'

export default function TermeratureController() {
  return (
    <div className='container mt-3 text-center'>
        <div className="card bg-light m-auto" style={{ width: 200 }}>
            <h1 className='text-light card border-50' style={{ height:150, width:150, border:"2px solid #666" }}>Temperature</h1>
            <div className="d-flex my-2">
                <Button text='-' classes={"btn-lg"} onClick={()=>console.log("-")} />
                <Button text='+' classes={"btn-lg"} onClick={()=>console.log("+")} />
            </div>
        </div>
    </div>
  )
}
