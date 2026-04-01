
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bannerImg from '../images/assets/banner.png'; 
import userIcon from '../images/assets/user.png';    
import packageIcon from '../images/assets/package.png';
import rocketIcon from '../images/assets/rocket.png';
import img1 from '../images/assets/writing_2327400 1.png';
import img2 from '../images/assets/design-tool.png';
import img3 from '../images/assets/package.png'; 
import img4 from '../images/assets/operation.png';
import img5 from '../images/assets/portfolio.png';
import img6 from '../images/assets/social-media.png';

import './App.css';

function App() {
 const [activeTab, setActiveTab] = useState('products'); 
  const [cart, setCart] = useState([]); 

  const products = [
    {
      id: 1, name: "AI Writing Pro", description: "Generate high-quality content, blogs, and marketing copy in seconds.",
      price: 29, period: "Mo", tag: "Best Seller", img: img1, 
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
    {
      id: 2, name: "Design Templates Pack", description: "2000+ premium templates for social media, presentations, and marketing.",
      price: 49, period: "One-Time", tag: "Popular", img: img2,
      features: ["2000+ templates", "Monthly updates", "Commercial license"]
    },
    {
      id: 3, name: "Premium Stock Assets", description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19, period: "Mo", tag: "New", icon: "photo_camera", 
      features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    {
      id: 4, name: "Automation Toolkit", description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      price: 79, period: "Mo", tag: "Popular", img: img4,
      features: ["50+ automations", "API access", "Custom workflows"]
    },
    {
      id: 5, name: "Resume Builder Pro", description: "Create professional resumes and cover letters that land interviews.",
      price: 15, period: "One-Time", tag: "New", img: img5,
      features: ["100+ templates", "ATS optimization", "Export to PDF"]
    },
    {
      id: 6, name: "Social Media Content Kit", description: "Complete toolkit for creating engaging social media content across all platforms.",
      price: 39, period: "Mo", tag: "Best Seller", img: img6,
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
    }
  ];

  const addToCart = (product) => {
 
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      {/* Navbar Section */}
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

        <div className="navbar-end flex items-center gap-6"> 
          <div className="flex items-center text-[#101727] cursor-pointer" onClick={() => setActiveTab('cart')}>
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cart.length}</span>
            </div>
          </div>     
          <div className="hidden lg:block cursor-pointer font-medium">Login</div>
          <a className="hidden lg:flex btn rounded-full px-8 text-white border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
            Get Started
          </a>
        </div>
      </div>

      {/* Banner Section */}
     <div className="banner bg-white py-10 lg:py-20">
        <div className="banner-Container mx-auto max-w-7xl px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="banner-Content flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-[#EEF4FF] px-3 py-1.5 rounded-full mb-6">
              <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-[#4F39F6]">
                <div className="w-1.5 h-1.5 bg-[#4F39F6] rounded-full"></div>
              </div>
              <span className="text-[#4F39F6] text-sm font-semibold">New: AI-Powered Tools Available</span>
            </div>

            <h2 className='font-extrabold text-4xl lg:text-6xl text-[#101727] leading-tight'>
              Supercharge Your <br/> Digital Workflow
            </h2>

            <p className='text-gray-500 my-6 text-lg'>
              Access premium AI tools, design assets, templates, and productivity <br className="hidden lg:block" />
              software—all in one place. Start creating faster today.
            </p> 
            
            <div className="flex gap-4">
              <a className="btn rounded-full px-8 h-12 w-52 text-white border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
                Explore Products
              </a>
              <a className="flex items-center h-12 w-52 gap-2 px-8 py-3 rounded-full border border-[#4F39F6] font-semibold text-lg text-[#4F39F6] hover:bg-purple-50 transition-all cursor-pointer">
                <span className="material-symbols-outlined">play_arrow</span>
                <span>Watch Demo</span>
              </a>
            </div>
          </div>

          <div className="bannerImage flex-1">
            <img src={bannerImg} alt="Banner" className="w-full h-auto object-cover rounded-2xl shadow-xl" />
          </div>
        </div>
      </div> 

      {/* Stars Section */}
     <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#b23fc5] py-14 text-white">
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

      {/* Digital Tools Section */}
      <div className="Digi-Tools">
  <ToastContainer position="top-right" autoClose={2000} />
  
  <div className="digital-tools w-full py-[120px] px-[10px] lg:px-[100px]">
    <div className="digital-tools-Container flex flex-col items-center text-center">
      <div className="digital-tools-Content max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Premium Digital Tools</h2>
        <p className="text-lg text-[#0F172A]/70 mb-8 px-4">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="digital-tools-actions mt-10">
          <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-full shadow-sm">    
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-10 py-3 rounded-full font-semibold text-lg transition-all ${activeTab === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white' : 'text-[#0F172A]'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-10 py-3 rounded-full font-semibold text-lg transition-all ${activeTab === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white' : 'text-[#0F172A]'}`}
            >
              Cart ({cart.length})
            </button>    
          </div>
        </div>
      </div>

      <div className="digital-tools-Card mt-16 w-full max-w-[1000px] mx-auto">
        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
            
              const isAlreadyInCart = cart.some(item => item.id === product.id);

              return (
                <div key={product.id} className="border border-gray-100 rounded-[32px] p-5 text-left relative shadow-sm transition-all flex flex-col bg-[#FFFFFF] min-h-[400px]">
              
                  <span className={`absolute top-5 right-5 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    product.tag === 'Best Seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : 
                    product.tag === 'Popular' ? 'bg-[#E1E7FF] text-[#4F39F6]' : 
                    product.tag === 'New' ? 'bg-[#DBFCE7] text-[#0A883E]' : 'text-gray-400'
                  }`}>
                    {product.tag}
                  </span>

                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-50 mb-4 overflow-hidden border border-gray-100">
                    {product.id === 3 ? (
                      <span className="material-symbols-outlined text-xl text-[#4F39F6]">{product.icon}</span>
                    ) : (
                      <img src={product.img} alt="" className="w-6 h-6 object-contain" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-xs mb-3 flex-grow leading-relaxed">{product.description}</p>
                  
                  <div className="text-xl font-bold mb-3">
                    ${product.price}
                    <span className="text-xs font-normal text-gray-400">/{product.period}</span>
                  </div>
                  
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-gray-600">
                        <span className="material-symbols-outlined text-green-500 mr-2 text-lg font-bold">check</span>{f}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className={`w-full py-2.5 rounded-full font-bold transition-all text-sm text-white ${
                      isAlreadyInCart ? 'bg-green-500' : 'bg-linear-to-r from-[#4F39F6] to-[#b23fc5] hover:opacity-90'
                    }`}
                  >
                    {isAlreadyInCart ? 'Added to Cart' : 'Buy Now'}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto py-10 px-6 border border-dashed border-gray-300 rounded-3xl bg-gray-50 text-center">
            {cart.length === 0 ? (
              <>
                <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">shopping_cart</span>
                <p className="text-gray-400">Your cart is empty</p>
              </>
            ) : (
              <div className="text-left">
                <h3 className="text-xl font-bold mb-6 text-center">Items in Cart</h3>
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-xl mb-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                        {item.id === 3 ? <span className="material-symbols-outlined text-[#4F39F6]">{item.icon}</span> : <img src={item.img} className="w-6 h-6 object-contain" />}
                      </div>
                      <span className="font-semibold text-sm">{item.name} - ${item.price}</span>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-sm hover:text-red-600">Remove</button>
                  </div>
                ))}
                
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span>Total Amount:</span>
                    <span>${totalPrice}</span>
                  </div>
                  <button 
                    className="w-full py-4 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white rounded-full font-bold shadow-lg"
                    onClick={() => { alert("Thank you for your purchase!"); setCart([]); }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
      </div>

      {/* Steps Section */}
    <div className="steps w-full py-[120px] px-[20px] lg:px-[200px] bg-gray-50 font-poppins">
      <div className="steps-Container flex flex-col items-center">
        <div className="steps-Content text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-lg text-[#0F172A] opacity-80 max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="steps-Card grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

          <div className="card-item relative bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-lg">
            <span className="absolute top-6 right-8 bg-[#4F39F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">
              01
            </span>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img src={userIcon} alt="User" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Create Account</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Sign up for free in seconds. <br /> No credit card required.
            </p>
          </div>

          <div className="card-item relative bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-lg">
            <span className="absolute top-6 right-8 bg-[#4F39F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">
              02
            </span>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img src={packageIcon} alt="Package" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Choose Products</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Browse our premium catalog <br /> and select your tools.
            </p>
          </div>

          <div className="card-item relative bg-white border border-gray-100 rounded-[2rem] p-10 flex flex-col items-center text-center shadow-lg">
            <span className="absolute top-6 right-8 bg-[#4F39F6] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">
              03
            </span>
            <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-8">
              <img src={rocketIcon} alt="Rocket" className="w-10 h-10 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Start Creating</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
              Download and start using <br /> your tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div> 

     {/* Pricing Section */}
     <div className="price w-full py-[120px] px-[20px] lg:px-[200px] bg-[#FFFFFF] font-poppins">
      <div className="price-Container flex flex-col items-center">
        <div className="price-Content text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-[#0F172A] opacity-80 max-w-2xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        
       <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10 font-poppins">
  
 
       <div className="price-card w-[300px] h-[380px] bg-gray-200 border border-gray-100 rounded-[2rem] p-6 shadow-lg flex flex-col justify-between text-left">
    <div className="card-item">
      <h3 className="text-xl font-bold text-[#0F172A] mb-1">Starter</h3>
      <p className="text-gray-600 text-[11px] mb-4">Perfect for getting started</p>
      
      <div className="flex items-baseline mb-5">
        <span className="text-3xl font-bold text-[#0F172A]">$0</span>
        <span className="text-xs font-medium text-gray-600 ml-1">/Month</span>
      </div>

      <ul className="space-y-1 mb-6">
        <li className="flex items-center text-gray-600 text-xs">
          <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
          Access to 10 free tools
        </li>
        <li className="flex items-center text-gray-600 text-xs">
          <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
          Basic templates
        </li>
        <li className="flex items-center text-gray-600 text-xs">
          <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
          Community support
        </li>
        <li className="flex items-center text-gray-600 text-xs">
          <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
          1 project per month
        </li>
      </ul>
    </div>
    
    <button className="w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white rounded-full font-bold text-sm shadow-md mt-auto">
      Get Started Free
    </button>
       </div>

 
       <div className="price-card relative w-[300px] h-[380px] bg-linear-to-r from-[#4F39F6] to-[#b23fc5] p-6 pt-10 rounded-[2rem] shadow-2xl flex flex-col justify-between text-left">
   
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFEFD5] text-[#BB4D00] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md z-10">
      Most Popular
    </div>

    <div className="card-item text-white">
      <h3 className="text-xl font-bold mb-1">Pro</h3>
      <p className="text-white opacity-80 text-[11px] mb-4">Best for professionals</p>
      
      <div className="flex items-baseline mb-5">
        <span className="text-3xl font-extrabold text-white">$29</span>
        <span className="text-xs font-medium opacity-80 ml-1">/Month</span>
      </div>

      <ul className="space-y-1 mb-6">
        <li className="flex items-center text-[11px]">
          <span className="material-symbols-outlined text-white mr-2 text-base">check</span>
          Access to all premium tools
        </li>
        <li className="flex items-center text-[11px]">
          <span className="material-symbols-outlined text-white mr-2 text-base">check</span>
          Unlimited templates
        </li>
        <li className="flex items-center text-[11px]">
          <span className="material-symbols-outlined text-white mr-2 text-base">check</span>
          Priority support
        </li>
        <li className="flex items-center text-[11px]">
          <span className="material-symbols-outlined text-white mr-2 text-base">check</span>
          Unlimited projects
        </li>
      </ul>
    </div>

    <button className="w-full py-3 bg-white text-[#4F39F6] rounded-full font-bold text-sm shadow-md mt-auto">
      Start Pro Trial
    </button>
       </div>

        <div className="price-card w-[300px] h-[380px] bg-gray-200 border border-gray-100 rounded-[2rem] p-6 pb-8 shadow-lg flex flex-col text-left font-poppins">
        <div className="card-item">
        <h3 className="text-xl font-bold text-[#0F172A] mb-1">Enterprise</h3>
    
        <p className="text-gray-600 text-[11px] mb-4">For teams and businesses</p>
    
        <div className="flex items-baseline mb-5">
        <span className="text-3xl font-bold text-[#0F172A]">$99</span>
        <span className="text-xs font-medium text-gray-600 ml-1">/Month</span>
        </div>

   
        <ul className="space-y-0.5 mb-6">
        <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        Everything in Pro
         </li>
         <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        Team collaboration
        </li>
        <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        Custom integrations
        </li>
        <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        Dedicated support
       </li>
       <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        SLA guarantee
       </li>
       <li className="flex items-center text-gray-600 text-xs">
        <span className="material-symbols-outlined text-green-500 mr-2 text-base">check</span>
        Custom branding
       </li>
        </ul>
       </div>
  
 
       <button className="w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white rounded-full font-bold text-sm shadow-md mt-auto mb-2">
       Contact Sales
       </button>
      </div>

        </div>
      </div>
    </div>

     {/* workflow section  */}
      <div className="workflow w-full py-16 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] text-white font-poppins px-6">
  <div className="workflow-Container max-w-4xl mx-auto flex flex-col items-center text-center">
    

    <div className="workflow-content mb-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>
      <p className="text-sm md:text-base opacity-90 leading-relaxed max-w-xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter. <br className="hidden md:block" /> 
        Start your free trial today.
      </p>
    </div>

 
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <button className="px-8 py-3 bg-white text-[#4F39F6] rounded-full font-bold text-base shadow-lg transition-all active:scale-95">
        Explore Products
      </button>
      
      <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-[#4F39F6] transition-all active:scale-95">
        View Pricing
      </button>
    </div>

    <p className="text-[12px] md:text-sm opacity-80 flex flex-wrap justify-center items-center gap-2">
      <span>14-day free trial</span> 
      <span className="hidden sm:inline">•</span> 
      <span>No credit card required</span> 
      <span className="hidden sm:inline">•</span> 
      <span>Cancel anytime</span>
    </p>

  </div>
      </div> 

{/* footer section  */}

<footer className="bg-[#101727] text-white py-14 px-6 font-poppins">

  <div className="max-w-5xl mx-auto">
 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">

      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
        <p className="text-gray-400 text-[14px] leading-relaxed">
          Premium digital tools for creators, professionals, and businesses.
        </p>
      </div>

      <div className="flex flex-col md:items-center">
        <div className="w-full md:w-fit">
          <h4 className="text-[15px] font-bold mb-5 uppercase tracking-wide">Product</h4>
          <ul className="space-y-3 text-gray-400 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">Features</li>
            <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
            <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
            <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:items-center">
        <div className="w-full md:w-fit">
          <h4 className="text-[15px] font-bold mb-5 uppercase tracking-wide">Company</h4>
          <ul className="space-y-3 text-gray-400 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">About</li>
            <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
            <li className="hover:text-white cursor-pointer transition-colors">Press</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:items-center">
        <div className="w-full md:w-fit">
          <h4 className="text-[15px] font-bold mb-5 uppercase tracking-wide">Resources</h4>
          <ul className="space-y-3 text-gray-400 text-[14px]">
            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
            <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-white cursor-pointer transition-colors">Community</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col md:items-end">
        <div className="w-full md:w-fit">
          <h4 className="text-[15px] font-bold mb-5 uppercase tracking-wide">Social Links</h4>
          <div className="flex gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-all shadow-md">
              <i className="fa-brands fa-instagram text-lg"></i>
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-all shadow-md">
              <i className="fa-brands fa-facebook-f text-lg"></i>
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#101727] cursor-pointer hover:bg-gray-200 transition-all shadow-md">
              <i className="fa-brands fa-x-twitter text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500 gap-4">
      <p className="order-2 md:order-1">© 2026 Digitools. All rights reserved.</p>
      
      <div className="flex space-x-8 order-1 md:order-2">
        <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
      </div>
    </div>
    
  </div>
</footer> 
    </>
  );
}

export default App;





