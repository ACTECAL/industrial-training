 import React from 'react'; 
 import { Link } from 'react-router-dom';

function Navbar() 
{
     return ( 
     
     <nav className="p-4 bg-blue-600 text-white flex justify-between"> 
     <Link to="/" className="text-lg font-bold">MyApp</Link> 
     <Link to="/login">Login</Link> </nav> ); }

export default Navbar;
