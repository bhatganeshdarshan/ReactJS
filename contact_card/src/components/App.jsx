import React from "react";
import Header from "./header";
import Card from "./card";
import contacts from './contacts.jsx'
function create(contact)
{
    return <div>
        <Card 
            name ={contact.name}
            phone={contact.phone}
            email={contact.email}
            src={contact.imgURL}
        />
    </div>
    
}

function App()
{
    return <div>
        <Header/>
        {contacts.map(create)}
    </div>
}

export default App;