import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'

function App() {
  const navigate=useNavigate();
const [movieName,setmovieName]=useState("");
const handleEvent=(event)=>{
setmovieName(event.target.value);
}
const handleGoClick=()=>{
  navigate("/details", {state: {movieName}});
}
  return (
    <>
    <div className='app-background'>
      <div className='container'>
        <h1>Movie Time</h1>
        <p>Search your fav!</p>
        <input type="text" placeholder="search movie" value={movieName} onChange={handleEvent}></input>
        <button onClick={handleGoClick}>Go</button>
      </div>
      </div>
    </>
  )
}

export default App;
