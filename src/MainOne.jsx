import React from 'react'
import Navbar from './Navbar';
import "./mainOne.css";
import NavbarS from './NavbarS';

export default function MainOne() {
  return (
    <div className='mainOne container-fluid'>
        <Navbar />
        <NavbarS />
        <div className="subdiv-1 container-fluid">
            <div>
                <p>AWESOME</p>
                <p className='p-bottom'>DESIGNS</p>
            </div>
        </div>

      
    </div>
  )
}
