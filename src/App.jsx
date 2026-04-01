import { useState } from 'react'
import bannerImg from '../images/assets/banner.png';

import './App.css'

function App() {
  return (
    <>
       {/* nabver  */}

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
{/* banner section */}

  <div className="banner bg-white py-10 lg:py-20">
    <div className="bannerContainer mx-auto max-w-7xl px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="bannerContent flex-1 text-left">
          <div className="inline-flex items-center gap-2 bg-[#EEF4FF]   px-3 py-1.5 rounded-full mb-6">
            <div className="flex items-center justify-center w-4 h-4  rounded-full border-2 border-[#4F39F6]">
              <div className="w-1.5 h-1.5 bg-[#4F39F6] rounded-full"> 
              </div>
            </div>
            <span className="text-[#4F39F6] text-sm font-semibold">
               New: AI-Powered Tools Available
            </span>
         </div>

          <h2 className='font-extrabold text-4xl lg:text-6xl text-  [#101727] leading-tight'>
            Supercharge Your <br/> Digital Workflow
          </h2>

          <p className='text-gray-500 my-6 text-lg'>
            Access premium AI tools, design assets, templates, and productivity <br className="hidden lg:block" />
            software—all in one place. Start creating faster today.
          </p> 
          
          <div className="flex gap-4">
             <a className="btn rounded-full px-8 h-12 w-52 text-white  border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
               Explore Products
             </a>
           
             <a className="flex items-center h-12 w-52 gap-2 px-8  py-3    rounded-full  border border-[#4F39F6] font-semibold text-lg  text-[#4F39F6] hover:bg-purple-50 transition-all">
             <span className="material-symbols-outlined ">
              play_arrow
              </span>
              <span>Watch Demo</span>
             </a>
          </div>
        </div>

       
        <div className="bannerImage flex-1">
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="w-full h-auto object-cover rounded-2xl shadow-xl" 
          />
        </div>

      </div>
    </div>
{/* stars section */}

    <div className="w-full h-50 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] py-14 text-white">
      <div className="flex flex-col md:flex-row text-center max-w-6xl mx-auto items-center">
        <div className="flex-1 py-4">
         <h2 className="text-5xl font-bold">50K+</h2>
         <p className="text-xl opacity-80 mt-2">Active Users</p>
       </div>
        <div className="flex-1 py-4 border-y md:border-y-0 md:border-x border-white/20">
         <h2 className="text-5xl font-bold">200+</h2>
         <p className="text-xl opacity-80 mt-2">Premium Tools</p>
       </div>
        <div className="flex-1 py-4">
         <h2 className="text-5xl font-bold">4.9</h2>
         <p className="text-xl opacity-80 mt-2">Rating</p>
       </div>

      </div> 
   </div>
  
    </>
  )
}



export default App
