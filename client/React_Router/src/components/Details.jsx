import React from 'react'
import { Link } from "react-router-dom";

function Detail() {
    return (
        <div>
            <h1 className='uppercase mb-4'>This is the details page</h1>
            <div className='flex tracking-widest font-medium text-2xl pl-2'>
                <Link to="/">Home | </Link>
                <Link to="/about" className='ml-1'>About | </Link>
                <Link to="/contact" className='ml-1'>Contact</Link>
            </div>
        </div>
    )
}

export default Detail