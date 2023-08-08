import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import NavLayout from './NavLayout'

import Product from './Product'

import Newabout from './Newabout'

export default function Route1() {
  return (
    <BrowserRouter>
    <Routes>
       
            <Route path ="/" element ={<NavLayout/>}>
               <Route  path ="/product" element ={<Product/>}/>
               <Route path ="/newabout" element={<Newabout/>}/>
            </Route>

        
    </Routes>


    </BrowserRouter>

  )
}

