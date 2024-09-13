//import react into the bundle
import React from "react";
import {createRoot} from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PropTypes from 'prop-types';

const SecondCounter = ({digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne}) => {
    return (
        <div className="bigCounter"> 
            <div className="clock" ><FontAwesomeIcon icon={faClock} /></div>
            <div className="six">{digitSix %10 }</div>
            <div className="five">{digitFive %10 }</div>
            <div className="four">{digitFour %10 }</div>
            <div className="three">{digitThree %10 }</div>
            <div className="two">{digitTwo %10 }</div>
            <div className="one">{digitOne %10 }</div>

        </div>
        
    )
      
}

SecondCounter.propTypes = {
 digitSix: PropTypes.number,
 digitFive: PropTypes.number,
 digitFour: PropTypes.number,
 digitThree: PropTypes.number,
 digitTwo: PropTypes.number,
 digitOne: PropTypes.number
};

let counter = 0;

const app = createRoot(document.getElementById('app'))

setInterval(() => {
   const six = Math.floor(counter/100000);
   const five = Math.floor(counter/10000);
   const four = Math.floor(counter/1000);
   const three = Math.floor(counter/100);
   const two = Math.floor(counter/10);
   const one = Math.floor(counter/1);

    counter++;
    app.render(<SecondCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>)
}, 1000);

