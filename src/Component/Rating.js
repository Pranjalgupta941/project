import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faStar } from '@fortawesome/free-solid-svg-icons'

export default function Rating(rate) {

  const arr = [];
    for (let i=1; i<=5; i++){
      if (i<=rate.value){
        arr.push( <FontAwesomeIcon icon={faStar}  style={{color : "green"}}/>);
      }
      else{
        arr.push( <FontAwesomeIcon icon={faStar}  />);
      }
    }
  return (
    <>{arr}</>
  );
}
