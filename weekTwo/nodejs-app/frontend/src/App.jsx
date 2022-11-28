import React, { useEffect, useState } from 'react'
import axios from './utils/axios'

export default function App() {
    const [state, setMessage] = useState();

    useEffect(() => {
        getMessageApi()
    }, []);

    const getMessageApi = async () => {
        return await axios.get('/api')
            .then(res => {
                setMessage(res.data.message)
            })
    }

    return (
        <div className='flex h-screen justify-center items-center dark:bg-slate-700'>
            <h1 className='text-4xl dark:text-white font-serif font-extrabold'>{state}</h1>
        </div>
    )
}