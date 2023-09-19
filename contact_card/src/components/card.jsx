import React from "react";


function Card(props)
{ 
    return( 
        <div className="main">
            <div className="profile-card">
                <div className="image">
                    <img src={props.src} className="profile-pic"/>
                </div>
                <div className="details">
                    <h2>{props.name}</h2>
                    <p>{props.phone}</p>
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;