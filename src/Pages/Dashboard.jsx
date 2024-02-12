import React from 'react';
import { Appbar } from '../components/Appbar';
import { Balance } from '../components/Balance';
import Users from '../components/Users';
import Logout from '../components/Logout';

function Dashboard() {
  return (
    <>
      <Appbar />
      <div className="flex justify-evenly">
        <Balance />
        <Logout />
      </div>
      <Users />
    </>
  );
}

export default Dashboard;
