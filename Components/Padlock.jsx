import '../src/Padlock.css';
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import { useState, useRef } from 'react'

const Padlock = () => {
    const [click, setClick] = useState(true)

    const handleClick = () => {
        setClick(false)
        console.log(click)
    }

    return (
        <div onClick={handleClick} className={` animation ${click ? 'padlock-container-active' : 'padlock-container-none '}`}>
            <GiPadlock size={70} className="padlock-closed  " />
            <GiPadlockOpen size={70} className="padlock-open  " />
        </div>
    );
};


export default Padlock;