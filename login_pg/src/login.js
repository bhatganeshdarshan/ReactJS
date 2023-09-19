import React, { useState } from "react";

function Log(props)
{
    const [isMousedOver, SetMouseOver] = useState(false);
    const [name , setName] = useState("");
    function text_name(event)
    {
        setName(event.target.value);
    }   
    function mOver()
    {
        SetMouseOver(true);
    }
    function mOut()
    {
        SetMouseOver(false);
    }

    return <div className="box">
        <div className="title">
            <h1>Hello {name}</h1>
        </div>
        <div className="forms">
                <input id="name" type="text" placeholder="Username" onChange={text_name}/>
                <input id="password" type="password" placeholder="Password"/>
                <button id="button" type="submit" style={{backgroundColor : isMousedOver ? "lightgreen" : "white"}}
                onMouseOver={mOver}
                onMouseOut={mOut}
                >Login</button>
            
        </div>
    </div>
    
}

export default Log;