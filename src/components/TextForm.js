import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clickled"+ text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Success", "Converted to uppercase");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clickled"+ text);
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Success", "Converted to lowercase");
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clickled"+ text);
    let newText = "";
    settext(newText);
    props.showAlert("Success", "Text is Cleared");
  };
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Success", "Text Was Copied");
  };
  const handleOnChange = (event) => {
    // console.log("onchange was occured");
    settext(event.target.value);
  };

  const [text, settext] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes taken to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
