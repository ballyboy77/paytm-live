import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastname] = useState('');
  const [Age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="m-28 max-sm:m-10 lg:pl-[12rem]">
      <div className=" max-sm:w-[25rem] max-sm:mr-[10rem] lg:w-[80%] flex flex-col items-center gap-7 shadow-2xl shadow-slate-600">
        <h1 className="font-serif text-6xl text-slate-400 ">
          Sign{' '}
          <span className="text-[5rem] text-green-500 animate-pulse duration-1000">
            Up
          </span>
        </h1>

        <input
          type="text"
          name="username"
          placeholder="username"
          className="h-12 w-72 max-sm:w-[70%] rounded-md bg-neutral-100 cursor-pointer"
          onChange={(e) => {
            console.log('change');
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="FirstName"
          className="h-12 w-72 max-sm:w-[70%] rounded-md bg-neutral-100 cursor-pointer"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="LastName"
          className="h-12 w-72 max-sm:w-[70%] rounded-md bg-neutral-100 cursor-pointer"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age"
          className="h-12 w-72 max-sm:w-[70%] rounded-md bg-neutral-100 cursor-pointer"
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
        <input
          type="password"
          placeholder="password(min 6 )"
          className="h-12 w-72 max-sm:w-[70%] rounded-md bg-neutral-100 cursor-pointer"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex items-center gap-5">
          <button
            onClick={async () => {
              const response = await axios.post(
                'https://paytm-backend-bc19.onrender.com/user/signup',
                {
                  username,
                  FirstName,
                  LastName,
                  Age,
                  password,
                }
              );
              await localStorage.setItem('token', response.data.token);
              navigate('/signin');
            }}
            className="m-5 h-14 w-36 rounded-full bg-emerald-400 hover:bg-emerald-700 duration-500 hover:active:bg-lime-300"
          >
            Create Account
          </button>
          <p>
            Already have a Account? <br></br>
            <Link to="/signin" className=" font-mono text-red-800">
              Log-In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
