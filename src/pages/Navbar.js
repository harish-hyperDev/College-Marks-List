import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
            <div className="text-3xl text-teal-200 font-semibold font-Montesarrat">Internal Marks List</div>
            <Link to={"/"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Log Out</Link>
            {/* <Link to={"/add-user"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Students</Link> */}
            <Link to={"/add-staff"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Staff</Link>
        </div>
    </>
  )
}

export default Navbar