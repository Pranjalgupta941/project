import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavLayout() {
  return (
    <div>
        <nav>
        <Link to ="/product">Product</Link>
        <Link to ="/newabout">About us</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
