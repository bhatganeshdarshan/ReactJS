import React from "react";

var Curr_Year = new Date().getFullYear();

function Footer()
{
    return <footer>
        <p>Copyright © {Curr_Year}</p>
    </footer>
}

export default Footer;