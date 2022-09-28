import React from 'react'
import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div>
            <h1 className='uppercase mb-4'>Page not found!</h1>
            <div className='flex tracking-wide font-medium text-2xl'>
                <Link to="/" className='uppercase'>Back to homepage</Link>
            </div>
        </div>
    )
}

export default NoMatch