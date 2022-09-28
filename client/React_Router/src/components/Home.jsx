import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className='uppercase mb-4'>This is the home page</h1>
            <div className='flex tracking-widest font-medium text-2xl pl-2'>
                <Link to="about">About | </Link>
                <Link to="contact" className='ml-1'>Contact | </Link>
                <Link to="details" className='ml-1'>Details</Link>
            </div>
        </div>
    )
}

export default Home