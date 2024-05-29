import React from 'react'
import { useEffect, useState } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleString());
    useEffect(() => {
        //定时器
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
    })
    return (
        <div>
            <h1>Clock</h1>
            <h2>{time}</h2>
        </div>
    )
}

export default Clock