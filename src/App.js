import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
    {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500);
    }

  const toggleMode1 = ()=> {
    if(mode === 'light')
      {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Blue mode enabled","success");
        // document.title = 'TextUtils - Blue Mode';
      }
      else{
        setMode('light') 
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled","success");
        // document.title = 'TextUtils - Light Mode';

      }
  }

  const toggleMode2 = ()=> {
    if(mode === 'light')
      {
        setMode('dark')
        document.body.style.backgroundColor = '#8B0000';
        showAlert("Red mode enabled","success");
        // document.title = 'TextUtils - Red Mode';

      }
      else{
        setMode('light') 
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled","success");
        // document.title = 'TextUtils - Light Mode';

      }
  }
  const toggleMode3 = ()=> {
    if(mode === 'light')
      {
        setMode('dark')
        document.body.style.backgroundColor = '#013220';
        showAlert("Green mode enabled","success");
        // document.title = 'TextUtils - Green Mode';
      }
      else{
        setMode('light') 
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode enabled","success");
        // document.title = 'TextUtils - Light Mode';

      }
  }

  return (
   <>
    <Router>
    <Navbar title= "TextUtils" mode= {mode} toggleMode1 = {toggleMode1} toggleMode2 = {toggleMode2} toggleMode3 = {toggleMode3}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
 
      <Routes>
        {/* exact - use exact to get to the exact location , react does partial matching, meaning if we have two component
        say on    /users (c1)    and   /users/home (c2)   so react will check the whole path if exact is written, doesnt change anything in this project*/}
        <Route exact path="/about" element={<About mode={ mode } />} />
        <Route exact path="/" 
        element={ <TextForm showAlert= {showAlert} heading= "Try TextUtils- Word counter, Character Counter, Remove Extra Spaces" mode = {mode}/> } />
      </Routes>
    </div>
    </Router>
    
   </>

  );
}

export default App;
