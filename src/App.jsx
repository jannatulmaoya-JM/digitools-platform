// import { useState } from 'react'
// import bannerImg from '../images/assets/banner.png';

// import './App.css'

// function App() {
//   return (
//     <>
//       {/* nabver  */}

//       <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20 font-poppins"> 
        
//         <div className="navbar-start">
         
//           <h2 className='font-extrabold text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#b23fc5]'>
//             DigiTools
//           </h2>
//         </div>

//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1 font-medium ">
//             <li><a>Products</a></li>
//             <li><a>Features</a></li>
//             <li><a>Pricing</a></li>
//             <li><a>Testimonials</a></li>
//             <li><a>FAQ</a></li>
//           </ul>
//         </div>

       
//         <div className="navbar-end hidden lg:flex items-center gap-6"> 
//           <div className="flex items-center text-[#101727]">
//             <a>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </a>
//           </div>     
//           <div className="cursor-pointer font-medium ">Login</div>
//           <a className="btn rounded-full px-8 text-white border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
//             Get Started
//           </a>
//         </div>
        
//       </div>
//       {/* banner section */}

//       <div className="banner bg-white py-10 lg:py-20">
//     <div className="banner-Container mx-auto max-w-7xl px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
//       <div className="banner-Content flex-1 text-left">
//           <div className="inline-flex items-center gap-2 bg-[#EEF4FF]   px-3 py-1.5 rounded-full mb-6">
//             <div className="flex items-center justify-center w-4 h-4  rounded-full border-2 border-[#4F39F6]">
//               <div className="w-1.5 h-1.5 bg-[#4F39F6] rounded-full"> 
//               </div>
//             </div>
//             <span className="text-[#4F39F6] text-sm font-semibold">
//                New: AI-Powered Tools Available
//             </span>
//          </div>

//           <h2 className='font-extrabold text-4xl lg:text-6xl text-  [#101727] leading-tight'>
//             Supercharge Your <br/> Digital Workflow
//           </h2>

//           <p className='text-gray-500 my-6 text-lg'>
//             Access premium AI tools, design assets, templates, and productivity <br className="hidden lg:block" />
//             software—all in one place. Start creating faster today.
//           </p> 
          
//           <div className="flex gap-4">
//              <a className="btn rounded-full px-8 h-12 w-52 text-white  border-none font-semibold text-lg bg-linear-to-r from-[#4F39F6] to-[#b23fc5]">
//                Explore Products
//              </a>
           
//              <a className="flex items-center h-12 w-52 gap-2 px-8  py-3    rounded-full  border border-[#4F39F6] font-semibold text-lg  text-[#4F39F6] hover:bg-purple-50 transition-all">
//              <span className="material-symbols-outlined ">
//               play_arrow
//               </span>
//               <span>Watch Demo</span>
//              </a>
//         </div>
//      </div>
//       <div className="bannerImage flex-1">
//           <img 
//             src={bannerImg} 
//             alt="Banner" 
//             className="w-full h-auto object-cover rounded-2xl shadow-xl" 
//           />
//       </div>

//     </div>
//       </div>
//       {/* stars section */}

//       <div className="w-full h-50 bg-linear-to-r from-[#4F39F6] to-[#b23fc5] py-14 text-white">
//       <div className="flex flex-col md:flex-row text-center max-w-6xl mx-auto items-center">
//         <div className="flex-1 py-4">
//          <h2 className="text-5xl font-bold">50K+</h2>
//          <p className="text-xl opacity-80 mt-2">Active Users</p>
//        </div>
//         <div className="flex-1 py-4 border-y md:border-y-0 md:border-x border-white/20">
//          <h2 className="text-5xl font-bold">200+</h2>
//          <p className="text-xl opacity-80 mt-2">Premium Tools</p>
//        </div>
//         <div className="flex-1 py-4">
//          <h2 className="text-5xl font-bold">4.9</h2>
//          <p className="text-xl opacity-80 mt-2">Rating</p>
//        </div>

//       </div> 
//       </div>

//      {/* digital tools section */}

//       <div className="digital-tools w-full py-[120px] px-[20px] lg:px-  [200px]">
//         <div className="digital-tools-Container flex flex-col items-center text-center">
    
//           <div className="digital-tools-Content max-w-2xl">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
//              Premium Digital Tools
//             </h2>
      
//            <p className="text-lg text-[#0F172A]/70 mb-8 px-4">
//              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
//            </p>

//            <div className="digital-tools-actions mt-10">
//              <div className="inline-flex items-center p-1 bg-white border border-gray-200 rounded-full shadow-sm">    
//                 <button className="px-10 py-3 bg-[#4F39F6] text-white rounded-full font-semibold text-lg transition-all">
//                  Products
//                 </button>
//                  <button className="px-10 py-3 text-[#0F172A] font-semibold text-lg hover:text-[#4F39F6] transition-all">
//                   Cart (2)
//                 </button>    
//                </div>
//              </div>
//            </div>

//             <div className="digital-tools-Card mt-16 w-full">
//              </div>

//         </div>
//       </div>
  
//     </>
//   )
// }



// export default App
// 
import { useState } from 'react';
import bannerImg from '../images/assets/banner.png'; 
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('products'); 
  const [cart, setCart] = useState([]); 

  const products = [
    {
      id: 1, name: "AI Writing Pro", description: "Generate high-quality content, blogs, and marketing copy in seconds.",
      price: 29, period: "Mo", tag: "Best Seller", icon: "description",
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
    {
      id: 2, name: "Design Templates Pack", description: "2000+ premium templates for social media, presentations, and marketing.",
      price: 49, period: "One-Time", tag: "Popular", icon: "palette",
      features: ["2000+ templates", "Monthly updates", "Commercial license"]
    },
    {
      id: 3, name: "Premium Stock Assets", description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19, period: "Mo", tag: "New", icon: "photo_camera",
      features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    {
      id: 4, name: "Automation Toolkit", description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      price: 79, period: "Mo", tag: "Popular", icon: "settings_suggest",
      features: ["50+ automations", "API access", "Custom workflows"]
    },
    {
      id: 5, name: "Resume Builder Pro", description: "Create professional resumes and cover letters that land interviews.",
      price: 15, period: "One-Time", tag: "New", icon: "assignment_ind",
      features: ["100+ templates", "ATS optimization", "Export to PDF"]
    },
    {
      id: 6, name: "Social Media Content Kit", description: "Complete toolkit for creating engaging social media content across all platforms.",
      price: 39, period: "Mo", tag: "Best Seller", icon: "share",
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

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
      <div className="digital-tools w-full py-[120px] px-[20px] lg:px-[200px]">
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
                  className={`px-10 py-3 rounded-full font-semibold text-lg transition-all ${activeTab === 'products' ? 'bg-[#4F39F6] text-white' : 'text-[#0F172A]'}`}
                >
                  Products
                </button>
                <button 
                  onClick={() => setActiveTab('cart')}
                  className={`px-10 py-3 rounded-full font-semibold text-lg transition-all ${activeTab === 'cart' ? 'bg-[#4F39F6] text-white' : 'text-[#0F172A]'}`}
                >
                  Cart ({cart.length})
                </button>    
              </div>
            </div>
          </div>

          <div className="digital-tools-Card mt-16 w-full">
            {activeTab === 'products' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <div key={product.id} className="border border-gray-100 rounded-3xl p-8 text-left relative hover:shadow-md transition-all flex flex-col bg-white">
                    
                    {/* Badge: Font Color Change Only */}
                    <span className={`absolute top-6 right-6 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-gray-50 ${
                      product.tag === 'Best Seller' ? 'text-[#BB4D00]' : 
                      product.tag === 'Popular' ? 'text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#b23fc5]' : 
                      product.tag === 'New' ? 'text-[#0A883E]' : 'text-gray-400'
                    }`}>
                      {product.tag}
                    </span>

                    <span className="material-symbols-outlined text-4xl text-[#4F39F6] mb-4 bg-purple-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                      {product.icon}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                    
                    <div className="text-2xl font-bold mb-4">
                      ${product.price}
                      <span className="text-sm font-normal text-gray-400">/{product.period}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-8">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <span className="material-symbols-outlined text-green-500 mr-2 text-lg">check</span>{f}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-3 bg-[#4F39F6] text-white rounded-2xl font-bold hover:bg-[#3b2bc4] transition-all"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto py-20 border border-dashed border-gray-300 rounded-3xl bg-gray-50 text-center">
                {cart.length === 0 ? (
                  <>
                    <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">shopping_cart</span>
                    <p className="text-gray-400">Your cart is empty</p>
                  </>
                ) : (
                  <div className="px-6 text-left">
                    <h3 className="text-xl font-bold mb-6 text-center">Items in Cart</h3>
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-white p-4 rounded-xl mb-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#4F39F6]">{item.icon}</span>
                          <span className="font-semibold text-sm">{item.name}</span>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-sm">Remove</button>
                      </div>
                    ))}
                    <button onClick={() => setCart([])} className="w-full mt-6 py-3 bg-[#4F39F6] text-white rounded-xl font-bold">Checkout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

