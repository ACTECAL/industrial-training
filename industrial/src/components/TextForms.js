import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick=()=>{
        console.log("onclick");
        console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
    }

     const handleOnChange=(event)=>{
        console.log("Onchange.");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text");
  return (
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control"value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn-btn-primary"onClick={handleUpClick}>Convert to uppercase</button>
        </div>
  )
}