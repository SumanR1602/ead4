import React, { useContext, useState } from 'react'
import Child from './Child'
import { MyContext } from '../context/MyContext';

export default function Parent() {
    const [message, setMessage] = useState();
    const handleMessage = (newmessage) => {
        setMessage(newmessage)
    }
    const {count,increment,decrement}=useContext(MyContext);
    return (
        <div>
            <div className="">
            <h1>Parent Componenet</h1>
            <Child message={message} onMessage={handleMessage} />
            <p>Message in Parent from Child: <b>{message}</b></p>
            </div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

        </div>
    )
}
