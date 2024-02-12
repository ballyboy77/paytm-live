import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  return (
    <div className=" mt-5">
      <button
        onClick={() => {
          localStorage.clear();
          navigate('/');
        }}
        className=" bg-slate-300 border rounded-md h-[40px]  w-[100px] flex items-center hover:bg-slate-400 duration-500"
      >
        <img src="/Logout.svg" className=" h-[22px] w-[30px]" />
        <h2 className=" font-mono">Log-Out</h2>
      </button>
    </div>
  );
}
