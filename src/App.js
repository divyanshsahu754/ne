//import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [image , setImage] = useState('')
  const imgalt=""
  useEffect(()=>{
    
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((response)=>setImage(response.data.message))
    
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <img src ={image} height={'300px'} alt={imgalt}/>
        
       
      </header>
    </div>
  );
}

export default App;
