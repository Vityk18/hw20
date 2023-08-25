import React from "react";
import Logo from './padlock.png';
import "./padlock.css"

const Icon = () => {
    return (
        <div className="padlock">
        <img className="img"
          src={Logo}
          alt="padlock"
        />
        </div>

    );
  };
  
  export default Icon;