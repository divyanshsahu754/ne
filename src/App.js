//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [mobileNumber, setMobileNumber] = useState(''); 

  function triggerOtp() {

    if(mobileNumber < 999999999 || mobileNumber >= 10000000000){
      alert('Invalid mobile number!!!');
      console.error('Invalid mobile number!!!');
      return;
    }

    fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mobile: mobileNumber
      })
    })
    .then(response => response.json())
    .then((data) => {
      setMobileNumber('');
      alert('Successfully delivered the otp!!!')
      console.log(data);
    })
    .catch(error => {
      alert('Please retry, something went wrong!!!')
      console.error(error);
    });
  }

  return (
    <div className="App">
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
      <button type="submit" onClick={triggerOtp}>Get the OTP Right Here Right Now</button>
      
    </div>
  );
}

export default App;
