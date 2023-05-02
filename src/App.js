//import logo from './logo.svg';
import { useRef} from 'react';
import './App.css';


function App() {
  
  const inputElement=useRef();
  const handleclick = () => {
    inputElement.current.click();
  };

  return (
    <div className="App">
      <div>
      <input type="file" ref={inputElement} /></div>
      <br/>
      <button onClick={handleclick}>Pick the file</button>
  
    </div>
  );
}

export default App;
