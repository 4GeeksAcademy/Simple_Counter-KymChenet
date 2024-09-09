//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';



// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


//render your react application
const SimpleCounter = (props) => {
    return (<div className="Counter">
         <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
         <div className="six">0</div>
         <div className="five">0</div>
         <div className="four">0</div>
         <div className="three">0</div>
         <div className="two">0</div>
         <div className="one">0</div>
         

    </div>);
}

ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter />);

