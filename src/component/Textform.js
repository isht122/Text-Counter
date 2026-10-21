import React, {useState, useRef} from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');
  const fileInputRef = useRef(null);

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase!', 'success');
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase!', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showAlert('Text cleared!', 'success');
  };
    

    const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard!', 'success');
  };

     const uploadText = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    setText(e.target.result);
  };

  reader.readAsText(file);

  event.target.value = '';
};

  return (
    <>
    <div className="container">
        <h2 className= 'mb-5'>{props.heading}</h2>
        <div className="form-field">
            
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>Convert to Lowercase</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={uploadText}>Upload Text</button>

      <input
        type="file"
        accept=".txt"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </div>
        
    <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
