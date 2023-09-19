import React, { useState } from 'react';

function Time()
{
    setInterval(GetTime,1000);

    const cur_time = new Date().toLocaleTimeString();
    const [time,setTime] = useState(cur_time);

    function GetTime()
    {
        const new_time = new Date().toLocaleTimeString();
        setTime(new_time);   
    }

    return <div>
        <h1>{time}</h1>
        <button onClick={GetTime} > Get Time </button>
    </div>
}

export default Time;