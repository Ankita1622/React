import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



import { useState } from 'react';


function App() {
const [mode,setMode] = useState('light')

const togglebtn = () => {
  if(mode == 'light')
  {
    setMode('dark')
    document.body.style.backgroundColor = 'gray'
    showAlert('Dark mode has been enabled','success')
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('White mode has been enabled','success')
  }
}

const [alert,setAlert] = useState(null)


const showAlert = (message,type) => {
  setAlert({
    msg:message,
    type:type
   })

   setTimeout(() => {
    setAlert(null)
   }, 1500);
}

return (
  <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} togglebtn={togglebtn} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  </>
);
}

export default App;
