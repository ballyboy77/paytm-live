import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section className=" flex justify-evenly mt-10 font-serif text-lg ">
      <h2 className=" cursor-pointer hover:bg-red-300 duration-500 rounded-lg px-8 py-4 max-sm:px-4 max-sm:py-5">
        <Link to="/signup">Create Account</Link>
      </h2>
      <h2 className=" cursor-pointer hover:bg-red-300 duration-500 rounded-lg px-8 py-4 ">
        <Link to="/signin">Log-In</Link>
      </h2>
      <h2 className=" cursor-pointer hover:bg-red-300 duration-500 rounded-lg px-8 py-4">
        <Link to="/dashboard">User-Dashboard</Link>
      </h2>
    </section>
  );
}

export default Navbar;
