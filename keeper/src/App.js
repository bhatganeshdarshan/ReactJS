import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from './Note';
import notes from './tasks';
function App()
{
  return <div>
    <Header/>
    {
      notes.map(
         arg =>
         (
          <Note
            key={arg.id}
            title={arg.title}
            content={arg.content}
          />
         )
      )
    }
    <Footer/>
  </div>
}

export default App;