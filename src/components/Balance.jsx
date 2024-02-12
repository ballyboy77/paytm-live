import axios from 'axios';
import { useState } from 'react';

export const Balance = () => {
  const [balance, setBalance] = useState('***');
  return (
    <div className="flex justify-around mt-5">
      <div className=" flex items-center font-bold text-lg gap-5">
        <button
          onClick={async () => {
            const response = await axios.get(
              'http://localhost:3000/accounts/balance',
              {
                headers: {
                  Authorization: localStorage.getItem('token'),
                },
              }
            );
            const data = await Number(response.data.balance);
            const trim = parseFloat(data.toFixed(2));
            await setBalance(trim);
          }}
          className=" border rounded-lg  bg-slate-400 h-[35px] w-[150px] hover:bg-teal-200 duration-500"
        >
          Your Balance
        </button>
        <p className=" font-mono text-green-800">{balance}</p>
      </div>
    </div>
  );
};
