import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setkMode] = useState("light"); //whether dark mode is enabled or not
  const[alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setkMode('dark')
      document.body.style.backgroundColor="#0d0f1d"
      showAlert("Dark Mode has been enabled","success")
      document.title ='TextUtils- Dark Mode'

      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing Dichod'
      // },2000)
      // setInterval(()=>{
      //   document.title ='Install Kar Lawde'
      // },1500)

    }
    else{
      setkMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils- Light Mode"
    }
  }
  
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "About Us" /> */}
      {/* <Navbar/> */}
      {/* <BrowserRouter>    /users -> component1 , /users/home ->component2  */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>} /> */}

          {/* <Route exact path="/" element ={<TextForm showAlert={showAlert} heading ="Enter the text to analyse below" mode={mode}/>}/> */}

          <TextForm showAlert={showAlert} heading ="Enter the text to analyse below" mode={mode}/>

        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
