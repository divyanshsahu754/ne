//import logo from './logo.svg';
import './App.css';
import{useState} from "react";

function App() {
  const [count,setCount] =useState(0)
  function increase(){
    setCount(count+1)
  }
  function decrease(){
    if (count<1){
    setCount(0)
    }
    else{
      setCount(count-1)
    }
    
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <br/>
      <div className="App1">
      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>
    </div>
    </div>
  );
}

export default App;
