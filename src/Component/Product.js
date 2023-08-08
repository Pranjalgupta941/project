import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Rating from './Rating';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

let masterList=[
  {
    productname:"mouse",
    url:"img/mouse.jpg",
    price:1000,
    disc:" this is the best mouse",
    rating:4,
  },
  {
    productname:"monitor",
    url:"img/monitor.jpg",
    price:1000,
    disc:" this is the best mouse",
    rating:1,
  },
  {
    productname:"cpu",
    url:"img/cpu.jpg",
    price:1000,
    disc:" this is the best mouse",
    rating:2,
  },
  {
    productname:"keybord",
    url:"img/key.jpg",
    price:1000,
    disc:" this is the best mouse",
    rating:3,
  }
];
export default function Product() {
  return masterList.map((prod) => {
    return (
      <div className="col">
        <div className="card">
          <img
            src={prod.url}
            style={{ width: "50%" }}
            className="card-img-top mx-auto"
            alt="logo"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{prod.productname}</h5>
            <h5 className="card-title">{prod.price}</h5>
            <p className="card-text">{prod.disc}</p>
            <Rating value={prod.rating} />
          </div>
        </div>
        <div className="mt-2">
<footer className="text-center text-white  fixed-bottom " style={{backgroundColor:"white"}}>
    
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
  });
}
