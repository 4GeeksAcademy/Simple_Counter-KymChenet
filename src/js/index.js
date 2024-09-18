//import react into the bundle
import React, { useEffect, useState } from "react";
import {createRoot} from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PropTypes from 'prop-types';



const SecondCounter = () => {


    const [active, setActive]  = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [countdown, setCountdown] = useState(false)
    const [alert, setAlert] = useState(0)

    useEffect(() => { 

        let intervalId;  

        if(active) {
            intervalId = setInterval(() => {
                setSeconds(value => value + 1) 
                },1000)   
            }     
        else if(countdown && seconds > 0 ) {
            intervalId = setInterval(() => {
                setSeconds(value => value - 1)
            }, 1000)
        }

         if(seconds === alert && alert !== 0) {
            window.alert("¡TIME'S OUT!")    
            setAlert(0)
            }
        
            return () => clearInterval(intervalId) 
    }, [seconds , active, countdown, alert ]);


    const startStop = () => setActive(value => value=!value)
    const resetTimer = () =>
        {setActive(false) 
        setSeconds (0) }   
    const handleChange = e => setSeconds(parseInt(e.target.value, 10) || 0)
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
                       <h1 className="text-center mt-5">Seconds Controller</h1>
                        <button onClick={startStop} className="mx-2 fs-5 btn btn-success">Start</button>
                        <button onClick={startStop} className="mx-2 fs-5 btn btn-danger">Stop</button>
                        <button onClick={resetTimer} className="mx-2 fs-5 btn btn-primary">Reset</button>
                </section>

                <section className="container text-center mt-5">
                    <h1>Countdown</h1>
                    <form 
                    className="form-control"
                    onSubmit={e=>e.preventDefault()}>
                    <input
                    className="form-control"
                    type= "number"
                    value={seconds} 
                    onChange={handleChange}
                    />
                        <input 
                        disabled={countdown}
                        
                        onClick={() => setCountdown (value => !value)}
                        className="mt-2 mx-2 btn btn-success" type="submit" value={"Start"}/>
                        <input 
                        disabled={!countdown}
                        onClick={() => setCountdown(value => !value)}
                        className="mt-2 mx-2 btn btn-danger" type="submit" value={"Stop"}/>
                    </form>
                </section>

                <section className="container text-center mt-5">
                    
                    <form 
                    className="form-control"
                    onSubmit={e=>e.preventDefault()}>
                        <h1>Create Alert</h1>
                    <input
                    className="form-control"
                    type= "number"
                    onChange={e => setAlert(parseInt( e.target.value, 10) || 0)}
                    />
                        <input 
                        onClick={() => {window.alert("Alert Created")}}
                        className="mt-2 mx-2 btn btn-success" type="submit" value={"Create"}/>
                    </form>
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

