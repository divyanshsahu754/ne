//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  function handleClick(){
    setdata("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")

  }
const[data,setdata]=useState([])
  useEffect(()=>{
    setdata("https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg")
  },[])

  return (
    <div className="App">
      <img src={data} alt={data}></img>
      <br/>
      <button onClick={handleClick}>change</button>
      
    </div>
  );
}

export default App;
