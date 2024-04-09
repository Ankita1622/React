import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState('')

    const handleOnChange =  (event) =>{
        //set new text value
        setText(event.target.value)
    }

    const handleUpClick = () => {
       //set text in uppercase
       setText(text.toUpperCase())
    }


    const handleLoClick = () => {
        //set text in uppercase
        setText(text.toLowerCase())
     }

     //copy text to clipboard
    const handleCopy = () => {
        var text = document.getElementById('mybox')
        text.select()

        navigator.clipboard.writeText(text.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="mybox" className="form-label">Example textarea</label>
            <textarea className="form-control" value = {text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>

        <div className="my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length}reading time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
   
  )
}
