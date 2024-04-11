import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<nav className='navbar navbar-expand-lg navbar-dark bg-gray-400 py-2'>
       <Link to= "/" className="navbar-brand ml-5 font-bold text-black" > Contacts</Link>
       
        </nav>
  )
}

export default Navbar