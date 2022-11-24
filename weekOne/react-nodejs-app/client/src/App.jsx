import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function App(){
    const [message, setMessage] = useState();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        axios.get('/api')
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err))
    }

    return (
        <div className='flex dark:bg-gray-800 h-screen justify-center items-center'>
            <h1 className='dark:text-white text-4xl'>{message}</h1>
        </div>
    )
}