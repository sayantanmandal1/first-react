import React, { useState } from 'react'

export default function TextForm(props) {
  const Handleonclick=(event)=>{
    console.log("Clicked!");
    setText(text.toUpperCase())
  }
  const Handlechange=(event)=>{
    console.log("Changed!");
    setText(event.target.value)
  }
  const [text,setText]=useState("Enter here ");
  return (
    <div>
        <h2>{props.tit}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={Handlechange} id="MyBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={Handleonclick}>Convert to UpperCase</button>
    </div>
  )
}
TextForm.defaultProps={
    tit:"Default textbox"
}