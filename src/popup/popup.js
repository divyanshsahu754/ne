import React, { useState } from "react";
import "./popup.css";
import axios from 'axios';

export function Modal() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
      };
    
  function triggerOtp() {
     

    if(mobileNumber < 999999999 || mobileNumber >= 10000000000){
      alert('Invalid mobile number!!!');
      console.error('Invalid mobile number!!!');
      return;
    }
    // axios({
    //   method: 'post',
    //   url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
    //   data: {
    //     mobile: mobileNumber
    //   }
    // })
    //   .then(function(data) {
    //     setMobileNumber('');
    //     alert('Successfully delivered the otp!!!');
    //     console.log(data);
    //   })
    //   .catch(function(error){
    //     alert('Please retry, something went wrong!!!');
    //     console.error(error);
    //   })
    axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      mobile:mobileNumber
    })
    .then(function (response) {
      setMobileNumber('');
      alert('Successfully delivered the otp!!!');    
      console.log(response);
    })
    .catch(function (error) {
      alert('Please retry, something went wrong!!!');
      console.log(error);
    });
  

  

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  }
  return (
    <>
    <br/>
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
      <button onClick={toggleModal} className="btn-modal">
        BLUFF
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>OTP SENT</h2>
            
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            
          </div>
        </div>
      )}
      </>

  );
}