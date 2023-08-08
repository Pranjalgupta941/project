import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Newabout1() {
  return (
    <div> 
        
      <div className="mt-2 bg-white">
             <div className="" style= {{maxWidth: 1400 ,height: 300}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="img/pranjal.jpeg" className="img-fluid rounded-start" alt="..." height={250} width={400} />
          </div>
          <div className="col-md-8 " >
            <div className="card-body ms-5">
              <h1 className="card-title " style={{color:'blue',padding:2}}>Hi, Everyone myself <b>Pranjal Gupta !</b> </h1>
              <h3 >Web Delveloper</h3>
              <h4 style={{color:'blue'}}>This is my website I hope all of you like it.</h4>
              <h5 className="card-text md-3" > <b>The website is made with help of  Reactjs ,CSS and a highly used of bootstrap.</b></h5>
            </div>
          </div>
        </div>
      </div>

      <div className="" style= {{maxWidth: 1400 ,height: 300}}>
        <div className="row md-2">
          <div className="col-md-8 " >
            <div className="card-body ms-5">
             
              <h4 style={{color:'blue'}}>Welcome to our digital oasis! We are thrilled to introduce you to our cutting-edge website, meticulously crafted using the power of ReactJS. With an unwavering commitment to innovation and user experience, we've embarked on a journey to revolutionize the way you interact with our brand and content.</h4>
              <h5 className="card-text md-3" > <b>The website is made with help of HTML,CSS and a highly used of bootstrap.</b></h5>
            </div>
          </div>
          <div className="col-md-2">
            <img src="img/react.png" className="img-fluid rounded-start" alt="..." style={{height:250}}/>
          </div>
          <div className="col-md-2">
            <img src="img/react1.png" className="img-fluid rounded-start" alt="..." style={{height:250}}/>
          </div>
          </div>
        </div>
        </div>
     
           
        <footer className="text-center text-white" style={{backgroundColor:"white"}}>
    
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
  )
}
