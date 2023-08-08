import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom'

import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Likecomp(props) {
    const [color, setColor] = useState(null);
    const [color1, setColor1] = useState(null);
    const [like, setLike] = useState(parseInt(props.count));
    const [dislike, setdisLike] = useState(parseInt(props.count));
    const onClick =() =>{
        if(color =="green"){
        setColor("black");
        setLike(like-1);

    }
    else{
        setColor("green");
        setLike(like+1);
    }
};
const onClick1 =() =>{
  if(color1 =="red"){
  setColor1("black");
  setdisLike(like-1);

}
else{
  setColor1("red");
  setdisLike(like+1);
}
};
  return (
     <>
    <div className='ms-5 mt-5' >
        <span className="me-2">Likes : {like}</span>
        <FontAwesomeIcon icon={faThumbsUp} size="2xl" color={color}  onClick={onClick}/>
        
    </div>
     <div className='ms-5 mt-5' >
     <span className="me-2">dislikey: {dislike}</span>
     <FontAwesomeIcon icon={faThumbsDown} size="2xl" color={color1}  onClick={onClick1}/>
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
     
 
 </>
 
    

            
  )
}
