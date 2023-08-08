import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Newhome() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/p3.jpg" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/p1.jpg" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/p2.jpg" className="d-block w-100" alt="..." height={500}/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>


<div className="mt-2 bg-primary" id="task"> 
                <h1 style={{color:"black"}}  className="text-center"><b><i>TASK</i></b></h1>
                <div className="row ">
                    <div className="col-md-4">
              <div className="card" >
                <img src="img/day1.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>FirstComponent</i></b></h5>
                  <Link to="/firstcomponent" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              
              
              <div className="col-md-4">
              <div className="card" >
                <img src="img/day2.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Demo22</i></b></h5>
                  <Link to="/demo22" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="img/day3.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Inlinecss</i></b></h5>
                  <Link to="/inlinecss" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              </div>
  

              <div className="row mt-3">
                    <div className="col-md-4">
              <div className="card" >
                <img src="img/c4.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Gallery</i></b></h5>
                  <Link to="/gallery" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="img/c5.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Display</i></b></h5>
                  <Link to="/display" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="img/c6.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Product</i></b></h5>
                  <Link to="/product" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              </div>
                     
              <div className="row mt-3">

              <div className="col-md-4">
              <div className="card" >
                <img src="img/c7.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Counter</i></b></h5>
                  <Link to="/counter1" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>

              <div className="col-md-4">
              <div className="card" >
                <img src="img/c8.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Local Storage</i></b></h5>
                  <Link to="/localstorage1" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              
              <div className="col-md-4">
              <div className="card" >
                <img src="img/c9.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Todo list</i></b></h5>
                  <Link to="/todoview1" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              </div>


              <div className="row mt-3">
                    

              <div className="col-md-4">
              <div className="card" >
                <img src="img/c10.jpg" className="card-img-top" alt="..." style={{height: "175px"}}/>
                <div className="card-body">
                  <h5 className="card-title"style={{textDecoration: "underline"}}><b><i>Like Dislike</i></b></h5>
                  <Link to="/likecomp" className="btn btn-primary">click here</Link>
                </div>
              </div>
              </div>
              </div>
             
                        
</div>
<div className="mt-2">
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
</div>
       

 

   
  )
}
