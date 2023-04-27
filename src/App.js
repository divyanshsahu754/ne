//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

let m=Math.random();
  m=Math.floor(m*10)+1;
  console.log(m)
  
function App() {
  const[n,guess]=useState("");
  const[count,newCount]=useState(1)
  
  function handlechange(event){
    guess(event.target.value)
    console.log(n)

    
  }
  
  function handleClick(){
    if (m>n){
      alert("press greater number")
      newCount(count+1);
      return
      }
    else if (m<n){
      alert("press smaller number")
      newCount(count+1);
      return
    }
    else {
      newCount(count+1);
      alert("boom, you completed the task in "+count+" attempts")
      
    }
  }
  


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      <input
      
        className='inp'
        placeholder='Guess the value'
        onChange={handlechange}
        value={n}
        type='number'
        maxLength="1"
      
      />
       <button onClick={handleClick} > Match Number</button>
      


    </div>
  );
}

export default App;
