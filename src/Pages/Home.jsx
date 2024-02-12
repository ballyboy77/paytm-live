import React from 'react';
import Signup from './Signup';

export default function Home() {
  return (
    <>
      <div className="flex  justify-center items-center gap-2 cursor-pointer mt-5">
        <img className="h-[50px]" src="/wallet.png" />
        <h1 className=" text-lg text-center font-mono text-green-600 text-[35px] flex flex-col">
          PAYTM
          <span className=" text-gray-600 text-[25px]  "> WALLET</span>
        </h1>
      </div>
      <div className=" mt-[3rem] text-center">
        <h1 className=" text-[2rem] font-serif">
          "Streamline Your Finances with Paytm Wallet, <br /> A Digital Solution
          for Modern Transactions"
        </h1>
      </div>
      <div className=" flex flex-row items-center justify-between">
        <img src="/dashboard.svg" className=" ml-[15rem]" />
        <div className=" w-[60%]">
          <Signup />
        </div>
      </div>
    </>
  );
}
