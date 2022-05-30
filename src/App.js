import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const [enter, setenter] = useState("Enable Dark Mode");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setenter("Enable Light Mode");
      showalert("Dark Mode has been Enabbeled", "success");
      document.title = "Textutils Dark Mode";
      setInterval(() => {
        document.title = "Install Text Utils now";
      }, 1500);
      setInterval(() => {
        document.title = "Textutils is amazing";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setenter("Enable Dark Mode");
      showalert("Light Mode has been enabbeled", "success");
      document.title = "Textutils Light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      {/* ye hmne props bnadiya hai */}
      <Navbar
        title="Textutils"
        mode={mode}
        togglemode={togglemode}
        textyr={enter}
      />
      <Alert alert={alert} />
      <TextForm
          heading="Enter the text to anlyze below"
          mode={mode}
          showalert={showalert}
        /> 
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            <About />
          {/* </Route> */}
          {/* <Route exact path="/"> */}
         
          {/* </Route>
        </Switch> */}
        
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
