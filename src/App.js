import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#022140";
      showAlert("success", "Dark Mode has been Enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "light Mode has been Enabled");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Pavan's App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>} />
            <Route exact path="/"
              element=
              {
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
              >
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
