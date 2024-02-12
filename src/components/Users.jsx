import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3000/user/bulk?filter=' + filter)
      .then((response) => setUsers(response.data.user));
  }, [filter]);
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="search user.."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
        <div>
          {users.map((user, i) => (
            <User key={i} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Users;

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between font-serif">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center  h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
        <button
          onClick={() => {
            navigate(
              '/transfer?id=' +
                user._id +
                '&name=' +
                user.firstName +
                '&lname=' +
                user.lastName
            );
          }}
          className="m-5 h-14 w-36 rounded-full bg-emerald-400 hover:bg-emerald-700 duration-500 hover:active:bg-lime-300"
        >
          Transfer Money
        </button>
      </div>
      {/* <div className="flex flex-col justify-center h-ful"> */}
    </div>
    // </div>
  );
}
