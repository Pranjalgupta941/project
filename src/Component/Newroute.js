import React from 'react'
import { Route ,BrowserRouter,Routes} from 'react-router-dom'
import Newnav from './Newnav'
import Newhome from './Newhome'
import Newabout1 from './Newabout1'
import FirstComponent from './FirstComponent'
import Demo22 from './Demo22'
import Inlinecss from './Inlinecss'
import { Gallery } from './Gallery'
import Display from './Display'
import Product from './Product'
import "../index.css"
import Counter1 from './Counter1'
import LocalStorage from './LocalStorage1'
import Todoview1 from './Todoview1'
import Contact from './Contact'
import Likecomp from './Likecomp'




export default function Newroute() {
  return (
    <BrowserRouter>
        
        <Routes>
            <Route path='/' element ={<Newnav/>}>
                <Route index element={<Newhome/>} />
                <Route index path='/newhome'element ={<Newhome/>}/>
                <Route path='/newabout1'element ={<Newabout1/>}/>
                <Route path='/firstcomponent'element ={<FirstComponent/>}/>
                <Route path='/demo22'element ={<Demo22/>}/>
                <Route path='/inlinecss'element ={<Inlinecss/>}/>
                <Route path='/gallery'element ={<Gallery/>}/>
                <Route path='/display'element ={<Display/>}/>
                <Route path='/product'element ={<Product/>}/>
                <Route path='/counter1'element ={<Counter1/>}/>
                <Route path='/localstorage1'element ={<LocalStorage/>}/>
                <Route path='/todoview1'element ={<Todoview1/>}/>
                <Route path='/contact'element ={<Contact/>}/>
                <Route path='/likecomp'element ={<Likecomp/>}/>
                

               

                
                
             
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
