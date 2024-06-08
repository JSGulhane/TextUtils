import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>
        {
           // console.log("Upper case btn clicked" + text);
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to upper case","success");

        }

    const handleLowClick = () =>
        {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lower case","success");

            }

     const handleClearClick = () =>
        {
            setText('');
            props.showAlert("Text cleared","success");

        }
    
    const handleCopyClick = () =>
        {
            navigator.clipboard.writeText(text);
            document.getSelection().removeAllRanges();
            props.showAlert("Copied to Clipboard!","success");
        }

    const handleBlanksClick = () =>
        {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed extra spaces","success");

        } 
   

    const handleOnChange = (event)=>
        {
          //  console.log('handle on change');
            setText(event.target.value);
        }
  
    const [text, setText] = useState('');  //text = "helloo"; wrong way  //setText("hellooo"); correct way to update text
 

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark' ? 'white' : 'black'}}>  
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#081834' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}  id="myBox" rows="8"></textarea>
    </div>

    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
    <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleBlanksClick}>Remove extra spaces</button>


    </div>

    <div className="container my-3"  style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Nothing to Preview"}</p>
    </div>



    </>
  )
}
