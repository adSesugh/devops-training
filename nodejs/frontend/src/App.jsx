import React, { useEffect, useState } from 'react';
import API from './httpApi';

export default function App() {
    const [message, setMessage] = useState();

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        API.get('/')
            .then(res => setMessage(res.data.message))
            .catch(err => console.log(err))
    }

    return (
        <div className='flex dark:bg-gray-800 h-screen justify-center items-center'>
            <h1 className='dark:text-white'>{message}</h1>
        </div>
    )
}