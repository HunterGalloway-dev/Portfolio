import React, { useState } from 'react';
import { login } from '../../../context/Context';

import './Login.css';

const Login = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const handleSubmit = () => {
    login(username,password)
  }


  return (
  <div className="Login">
    <div className='text-center'>
      <form className='mx-auto w-25' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input type='text' className='form-control' onChange={(e) => setUsername(e.target.value)}></input>
        </div>

        <div className='form-group mb-3'>
          <label>Password</label>
          <input type={'text'} className='form-control'  onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <button type='submit' className='btn btn-primary'>Log In</button>
      </form>
    </div>
  </div>
)};

export default Login;
