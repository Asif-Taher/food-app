import React, { useState } from "react";
import './SignUp.css';
import {Link} from 'react-router-dom'
import app from "../../Firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export default function Signup() {

const [name,setName] = useState('');
const [password,setPassword] = useState('');
const [email,setEmail] = useState('');
const [error,setError] = useState('');

  //blurName function
  const blurName = (e) =>{
    setName(e.target.value);
  }
  //blurPassword fucntion
  const blurPassword = (e) =>{
  setPassword(e.target.value);
  }
//blurEmail function
const blurEmail =(e)=>{
  setEmail(e.target.value);
}
  //submit handle
  const handleSubmit = (e) =>{
    e.preventDefault();
    //signup with eamil and password
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCrediantial =>{
      const user = userCrediantial.user;
      console.log(user);
      setEmail('');
      setPassword('');
      setName('');
  }))
  .catch(error =>{
    console.log(error);
    setError(error.message);

  })
  }
//handle signUp
const handleSignUp = () =>{
  console.log("Email send");
}

  
  return (
    <div className="sign-up">
      <div className="sign-up-container">
        <h2>Please SignUp</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input onBlur={blurName} type="text" placeholder="Enter your name"/>
          <label>Email:</label>
          <input onBlur={blurEmail} type="email" name="email" id="" placeholder="email"/>
          <label>Password: </label>
          <input  onBlur={blurPassword} type="password" name="password" id="" placeholder="password" />
          <button type="submit" onClick={handleSignUp}>SignUp</button>
        </form>
          <p className="already-signup">If you already signup <span><Link to='/login'>Please Login</Link></span></p>
      </div>

    </div>
  );
}
