import React from 'react'
import { useParams } from "react-router-dom";

function Dynamic() {
    const {id} = useParams();
    return (
        <div>
            <h1 className='mt-2'>This is dynamic page for user id {id}</h1>
        </div>
    )
}

export default Dynamic