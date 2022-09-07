import { useState } from 'react'
import { login } from "./utils";
import "./styles.css";
import { set } from 'mongoose';


// ================ LOGIN FORM ====================
// 
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');


  const triggerLogin = () => {
    
    login({email, password}) 
      .then(value => window.alert(value))
      .catch(error => setErrMsg(error)) 
  }

  const onChange = (e: any) => {

    if(e.target.name === "email"){
      setEmail(e.target.value);
      console.log(email);

    } 
    
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
 
  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input onChange={onChange} name='email' value={email} id={"email"} type={"email"}  />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input onChange={onChange} name='password' value={password} id={"password"} type={"password"}/>
      </div>

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage">{errMsg}</div>

      <div className="button">
        <button disabled={!email || password.length < 6} onClick={triggerLogin}>Login</button>
      </div>
    </div>
  );
}