import React, { useState } from "react";

// Add functionality like initially box should have text:-> "Enter here"
export default function TextBar(props) {
  const [text, setText] = useState("");

  const backToOriginal = () => {
    setText("");
    props.showAlert("Returned to the initial state", "success");
  };
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to upperCase", "success");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowerCase", "success");
  };
  const handleTextUI = (e) => {
    setText(e.target.value);
  };
  const handletextExtract = () => {
    const regex = text.replace(/[^\w\s]/gi, "");
    setText(regex);
    props.showAlert("Removed symbols from the text", "success");
  };

  const removeExtraSpaces = () => {
    const regex = text.replace(/\s\s+/g, " ");
    // https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
    setText(regex);
    props.showAlert("Removed extra spaces (line space included)", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control fs-5"
            value={text}
            onChange={handleTextUI}
            style={{
              backgroundColor: props.mode === "light" ? "#45484b" : "#d3c8c8",
              color: props.mode === "dark" ? "black" : "white",
            }}
            id="myText"
            rows="8"
          ></textarea>
        </div>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-dark" onClick={backToOriginal}>
            Reset
          </button>
          <button className="btn btn-primary" onClick={handleUpperCase}>
            Convert to upperCase
          </button>
          <button className="btn btn-primary" onClick={handleLowerCase}>
            Convert to lowerCase
          </button>
          <button className="btn btn-primary" onClick={handletextExtract}>
            Extract Symbols
          </button>
          <button className="btn btn-primary" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p className="lh-1">
          <b>
            {text === ""
              ? 0
              : text.length >= 1 && text !== "" && text.split(" ").length <= 1
              ? 1
              : text.split(" ").length}
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p className="lh-1">
          Estimate time to read{" "}
          <b>{text === "" ? 0 : text.split(" ").length / 125} </b> minutes
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Your text will appear here"}</p>
      </div>
    </>
  );
}
