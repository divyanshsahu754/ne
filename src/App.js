//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import axios from 'axios';
import { Modal } from './popup/popup';

function App() {
  // const [mobileNumber, setMobileNumber] = useState(''); 

  // function triggerOtp() {

  //   if(mobileNumber < 999999999 || mobileNumber >= 10000000000){
  //     alert('Invalid mobile number!!!');
  //     console.error('Invalid mobile number!!!');
  //     return;
  //   }
  //   // axios({
  //   //   method: 'post',
  //   //   url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
  //   //   data: {
  //   //     mobile: mobileNumber
  //   //   }
  //   // })
  //   //   .then(function(data) {
  //   //     setMobileNumber('');
  //   //     alert('Successfully delivered the otp!!!');
  //   //     console.log(data);
  //   //   })
  //   //   .catch(function(error){
  //   //     alert('Please retry, something went wrong!!!');
  //   //     console.error(error);
  //   //   })
  //   axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
  //     mobile:mobileNumber
  //   })
  //   .then(function (response) {
  //     setMobileNumber('');
  //     alert('Successfully delivered the otp!!!');    
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     alert('Please retry, something went wrong!!!');
  //     console.log(error);
  //   });

    
    
   
    
  

  return (
    <div className="App">
      {/* <br/>
      <br/>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        >
      <input type="number" placeholder='Mobile Number'
      validation={{
        required: {
          value: true,
          message: 'required',
        },
        minLength: {
          value: 10,
          message: 'min 10 characters',
        },
        maxLength: {
          value: 10,
          message: 'min 10 characters',
        }
      }}
        onChange={e => setMobileNumber(e.target.value)}
        value={mobileNumber}
      ></input>
      </form>
      <br/>
      <button type="submit" onClick={triggerOtp}>Click</button>
      <Modal/> */}
      <Modal/>
      
    </div>
  );
}

export default App;
