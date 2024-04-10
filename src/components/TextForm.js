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
       props.showAlert('Converted to uppercase','success')
    }


    const handleLoClick = () => {
        //set text in uppercase
        setText(text.toLowerCase())
        props.showAlert('Converted to lowercase','success')
     }

     //copy text to clipboard
    const handleCopy = () => {
        var text = document.getElementById('mybox')
        text.select()

        navigator.clipboard.writeText(text.value)
        props.showAlert('Copy text successfully','success')
    }

    const handleExtraSpace = () => {
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert('Remove extra spaces successfully','success')
    }
  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">Example textarea</label>
                <textarea className="form-control" value = {text} id="mybox" onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove extra spaces</button>
        </div>
        
        <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length}reading time</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview here.'}</p>
        </div>
    </>
  )
}
