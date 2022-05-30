import React,{useState} from 'react'
export default function TextForm(props){
    const handleupClick=()=>{
        console.log("Uppercase was clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("Converted To Uppercase!","primary")
    }
    const handleloClick=()=>{
        console.log("lowercase was clicked")
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showalert("Converted To Lowercase!","primary")
    }
    const handleonchange=(event)=>{
        console.log("changed");
        setText(event.target.value)
    }
    const clearit=()=>{
        setText(" ");
        props.showalert("Cleared!","success")
    }
    const handlecopy=()=>{
        let text=document.getElementById("mybox");
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showalert("Copied to Clipboard!","success")
    }
    const removespace=()=>{
        let newtext=text.split(" ");
        setText(newtext.join(""))
        props.showalert("Spaces Removed!","success")
    }
    const [text,setText]=useState(" ")
    // text="new"// wrong way
    // setText("new") // correct way
return(
    <>
    <div style={{color: props.mode==='light'?'black':'white'}}>

        <h1 >{props.heading}</h1>
        <div class="mb-3">
  <textarea className="form-control" value={text} id="mybox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey'}} onChange={handleonchange} placeholder="Enter Your Text Here"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupClick} >Convert to Uppercase</button>
<button className="btn btn-primary mx-1 " onClick={handleloClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 " onClick={clearit}>Clear Text</button>
<button className="btn btn-primary mx-1 " onClick={handlecopy}>Copy Text</button>
<button className="btn btn-primary mx-1 " onClick={removespace}>Remove Spaces</button>

    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p><b>{0.008*text.split(" ").length} Minutes read</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
)
}