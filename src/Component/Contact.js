import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter,faSafari, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Contact() {
  return (
    <div>
          
       <div className='container mt-2 bg-white' >
  <div className="row mt-5">
    <div className="col-md-3"></div>
    <div className="col-md-6 border-2 border border-info">
      <h1>
        <p className="text-center bg-info-subtle"><i>Submit your request</i></p>
      </h1>
      <form onsubmit="return add(this)">
        <div className="mt-3">
          <label className="form-label" st><b><i>Email Address:</i></b></label>
          <input type="text" className="form-control" id="emailaddress" required />
        </div>
        <div className="mt-3">
          <label className="form-label"><b><i>Password:</i></b></label>
          <input type="password" className="form-control" id="pass" required />
        </div>
        <div className="mt-3">
          <label className="form-label"><b><i>Topic</i></b></label>
          <input type="text" className="form-control" id="topic" required />
        </div>
        <div className="mt-3">
          <label className="form-label"><b><i>Subject:</i></b></label>
          <input type="text" className="form-control" id="subject" required />
        </div>
        <div className="mt-3">
          <textarea className="form-control" id="information" rows="4"></textarea>
          <label className="form-label" for="information"><b><i>Additional information</i></b></label>
        </div>
        <div className="mt-3 mb-3 text-center">
          <input type="submit" className="btn btn-outline-info" />
          <input type="reset" className="btn btn-outline-danger" />
        </div>
      </form>
    </div>
    <div className="col-md-3"></div>
  </div> 
   
   


<section className="">
     <div className="container text-center text-md-start mt-5"> 
      <div className="row mt-3">
        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-6">
 
          <h6 className="text-uppercase fw-bold mb-4">
          <FontAwesomeIcon icon={faSafari} /><b>Website</b>
          </h6>
          <p style={{color:'blue'}}>
            <b>The website is made with help of CSS ,  bootstrap highly used of reactjs.</b>
          </p>
        </div>

        <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-md-0 mb-6">
 
          <h6 className="text-uppercase fw-bold mb-4" ><b>Contact</b></h6>
          <p ><FontAwesomeIcon icon={faHome} /> <b>Barabanki, UP,
              225001</b></p>

          <Link to="//mail.google.com/mail/u/0/#inbox"><FontAwesomeIcon icon={faEnvelope} /><b>gpranjal941@gmail.com</b> </Link>

          <p ><FontAwesomeIcon icon={faPhone} /><b>+91 8881550714</b></p>

        </div> 
     </div>
     </div>
  </section>
  
</div>
<div className="mt-2">
<footer className="text-center text-white fixed-bottom" style={{backgroundColor:"white"}}>
    
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
  )
}
