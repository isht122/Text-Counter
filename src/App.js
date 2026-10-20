
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState, useEffect } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg:message, type:type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleDarkMode = () => {
    setMode(!Mode);
    showAlert(`Dark mode has been ${!Mode ? 'enabled' : 'disabled'}`, 'success');
  };

     useEffect(() => {
    document.body.className = Mode ? 'dark-mode' : 'light-mode';
  }, [Mode]);

  return (
    <> 
    <Router> 
    <Navbar title="Text Counter" aboutText="About Text Counter" mode={Mode} toggleMode={toggleDarkMode}/>  
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Textform heading="Enter the text to analyze below" />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>   
    
   </>
  );
}

export default App;
