import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Transfer() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const lname = searchParams.get('lname');
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-center items-center mt-[5rem]">
      <div className="border h-min text-card-foreground max-w-md p-4 space-y-2 w-96 bg-white  shadow-2xl rounded-lg">
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className=" text-3xl font-bold text-center">Send Money</h2>
          <h3 className=" text-3xl font-bold text-center">To</h3>
        </div>
        <div className=" p-4">
          <div className=" flex items-center space-x-2 pb-10 pl-5">
            <div className=" w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className=" text-2xl text-white">{name[0]}</span>
            </div>
            <h3 className=" font-mono text-[1.5rem]">{name}</h3>
            <h3 className=" font-mono text-[1.5rem]">{lname}</h3>
          </div>
          <div className=" space-y-4">
            <div className=" space-y-2">
              <label className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Amount
              </label>
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                type="number"
                id="amount"
                placeholder="Enter amount to transfer"
              />
            </div>
            <button
              onClick={() => {
                axios.post(
                  'http://localhost:3000/accounts/transfer',
                  {
                    to: id,
                    amount: amount,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                );
                navigate('/dashboard');
              }}
              className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
