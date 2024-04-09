import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import { useState } from 'react';


function App() {
  const [mode,setMode] = useState('light')

const togglebtn = () => {
  console.log('togglebtn',togglebtn)
  if(mode == 'light')
  {
    setMode('dark')
  }else{
    setMode('light')
  }
}
  
  return (
    <>
     {/* <Navbar/> */}
    <Navbar title = "TextUtils" aboutText = "About" mode={mode}  togglebtn={togglebtn}/>
      <div className="container my-3">
        <TextForm heading = "Enter the text to analyze"/>
      </div>
      {/* <div className="container my-3"></div>
      <About/>
      <div/> */}
    </>
  );
}

export default App;
