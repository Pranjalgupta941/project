import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function addtolocal(name, key, value) {
  // Check if name key avaailable in local storage
  if (localStorage.getItem(name)) {
    //first get data from name key : must convert it into string
    let old = JSON.parse(localStorage.getItem(name));
    old[key] = value;
    localStorage.setItem(name, JSON.stringify(old));
  } else {
    let m = {}; // create empty object
    m[key] = value;
    localStorage.setItem(name, JSON.stringify(m));
  }
}

function add(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();
  // Read the form data
  const form = e.target;
  //const formData = new FormData(form);
  //const formJson = Object.fromEntries(formData.entries());
  addtolocal("userInfo", form.name.value, form.pass.value);
  document.getElementById("p1").innerText = localStorage.getItem("userInfo");
}

export default function LocalStorage() {
  return (
    <div>
        <div className="mt-1">
      <form onSubmit={add}>
        <input type="text" name="name" />
        <input type="password" name="pass" />
        <span className="border border-warning"></span>
        <button type="submit" className="btn btn-outline-danger">Add</button>
      </form>
      </div>
      <p id="p1"></p>
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
