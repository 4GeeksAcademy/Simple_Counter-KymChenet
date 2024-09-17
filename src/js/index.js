//import react into the bundle
import React, { useEffect, useState } from "react";
import {createRoot} from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PropTypes from 'prop-types';



const SecondCounter = () => {


    const [ active, setActive]  = useState(false)
    const [seconds, setSeconds] = useState(0)


    useEffect(( ) => {
        let intervalId;

        if(active) {
            intervalId = setInterval(() => {
                setSeconds(value => value +1) 
                },1000)
            } else {
                clearInterval(intervalId)

            }
            return () => clearInterval(intervalId)    
    }, [active]);

    const startStop = () => setActive(value => value=!value)
    const resetTimer = () => setActive(value => seconds = 0)    
    return (
        <div className="bigCounter"> 
                <section className="counter-head">
                    <div className="clock" ><FontAwesomeIcon icon={faClock} /></div> 
                    <div>{Math.floor(seconds/100000)%10}</div> 
                    <div>{Math.floor(seconds/10000)%10}</div> 
                    <div>{Math.floor(seconds/1000)%10}</div> 
                    <div>{Math.floor(seconds/100)%10}</div> 
                    <div>{Math.floor(seconds/10)%10}</div> 
                    <div>{Math.floor(seconds)%10}</div> 
                </section>
                
                <section  className= "container text-center">
                        <button onClick={startStop} className="mx-2 btn mx-2 btn-success">Start</button>
                        <button onClick={startStop} className="mx-2 btn mx-2 btn-danger">Stop</button>
                        <button onClick={resetTimer} className="mx-2 btn mx-2 btn-primary">Reset</button>
                </section>

            

        </div>
        
    )
       
}




const app = createRoot(document.getElementById('app'))
let counter = 0;

setInterval(() => {

    counter++;
    app.render(<SecondCounter seconds={counter}/>)
}, 1000);

