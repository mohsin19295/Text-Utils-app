import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextBar from "./components/TextBar";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // Passed object in setAlert
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } else {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
    }
  };
  return (
    <>
    <Router>
        <Navbar
        title="TextUtils"
        myHome="Home"
        myAbout="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About img={"../myImage.png"} discription={"Tesxutils is the app where you can change to text to lowercase, uppercase. You can also check your total words and characters count as well as estimate read time and more."} mode={mode}/>
          </Route>
          <Route exact path="/">
        <TextBar showAlert={showAlert} heading="Please Type Here..." mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
