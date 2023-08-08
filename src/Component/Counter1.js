import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Counter1() {
   const [counter, setCounter]=useState(1);
   const Increment =()=>{
         setCounter(counter +1);
   };
   
   const Decrement =()=>{
         setCounter(counter -1);
   };
  return (
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={Increment} style={{margin:"5px",padding:"5px"}}>Increment</button>
        <button onClick={Decrement} style={{margin:"5px",padding:"5px"}}>Decrement</button>

        <div className="mt-2">
<footer className="text-center text-white fixed-bottom " style={{backgroundColor:"white"}}>
    
    <div className="container pt-4">
      
      <section className="mb-4">
        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="#!" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faFacebook} /></Link>

        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="#!" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faTwitter} /></Link>

        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="https://www.google.com/" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faGoogle} /></Link>


        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="#!" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faInstagram} /></Link>

        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="https://www.linkedin.com/feed/" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faLinkedin} /></Link>
        <Link className="btn btn-link btn-floating btn-lg text-dark m-1" to="#!" role="button"
          data-mdb-ripple-color="dark"><FontAwesomeIcon icon={faGithub} /></Link>
      </section>
      
    </div>
    


    <div className="text-center text-dark p-3 bg-danger" style={{backgroundColor: "red"}}>
      © 2020 Copyright:
      <Link className="text-white" href="https://www.linkedin.com/feed/">Pranjal Gupta</Link>
    </div>

  </footer>
  </div>
    </div>
        
  );
}
