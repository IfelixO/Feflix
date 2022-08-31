import React from "react";

import '../css/Header.css'

import shuffle from '../img/shuffle.png'

const Header = () => {
    return ( 
        <>
            <div className="header-all">
                <img src={shuffle} alt="" className="header-shuffle"/>
                <h1 className="header-call">Don't know what to watch?</h1>
            </div>
        </>
     );
}
 
export default Header;