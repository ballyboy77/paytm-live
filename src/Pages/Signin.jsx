import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div className="m-28 max-sm:w-[80%] max-sm:ml-10">
      <div className="flex flex-col items-center gap-7 shadow-2xl shadow-slate-600 lg:h-[30rem] lg:w-[50%] lg:pt-[5rem] lg:ml-[20rem] ">
        <h1 className="font-serif text-6xl text-slate-400 ">
          Sign{' '}
          <span className="text-[5rem] text-green-500 animate-pulse duration-1000">
            In
          </span>
        </h1>

        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name="username"
          placeholder="username (email)"
          className="h-12 w-72 rounded-md bg-neutral-100 cursor-pointer"
        />

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          className="h-12 w-72 rounded-md bg-neutral-100 cursor-pointer"
        />
        <button
          onClick={async () => {
            const response = await axios.post(
              'https://paytm-backend-bc19.onrender.com/user/signin',
              {
                username,
                password,
              }
            );
            localStorage.clear();
            const data = await response.data.token;
            localStorage.setItem('token', 'Bearer ' + data);
            navigate('/dashboard');
          }}
          className="m-5 h-14 w-36 rounded-full bg-emerald-400 hover:bg-emerald-700 duration-500 hover:active:bg-lime-300"
        >
          Log In
        </button>
        <p className=" flex text-lg gap-2 mb-10">
          Don't have a account? <br></br>
          <Link to="/" className=" font-mono text-red-800 underline">
            Create-Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
