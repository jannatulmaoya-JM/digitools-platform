import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      
      <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20 font-poppins"> 
        
        <div className="navbar-start">
         
          <h2 className='font-extrabold text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#b23fc5]'>
            DigiTools
          </h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium ">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

       
        <div className="navbar-end hidden lg:flex items-center gap-6"> 
          <div className="flex items-center text-[#101727]">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
          </div>     
          <div className="cursor-pointer font-medium ">Login</div>
          <a className="btn rounded-full px-8 text-white border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
            Get Started
          </a>
        </div>
        
      </div>
    </>
  )
}



export default App
