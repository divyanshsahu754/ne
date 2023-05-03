//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [image , setImage] = useState('')
  const imgalt=""
  useEffect(()=>{
    async function getDog () {

      try{
          // async await (to wait till request is processed
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await response.json()
          setImage(data.message)
      }
      catch(error){
        console.log('i am from catch' ,error)
      }
    }
    setImage(getDog)

  },[])

  return (
    <div className="App">
      
      <img src ={image} height={'300px'} alt={imgalt}/>
      

      
    </div>
  );
}

export default App;
