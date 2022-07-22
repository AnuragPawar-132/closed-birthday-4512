import React, { useState } from 'react'
import './Navbar.css'
import { Navigate,Link,NavLink,useNavigate } from 'react-router-dom'
import hum from '../assets/humberger.jpg'
import cross from '../assets/cross.jpg'
import searchbtn from '../assets/search.png'
const Navbar = () => {
  const navigate=useNavigate()
  const [toggle,setToggle]=useState(false)
  const [close, setClose]=useState(false)
  const [visible,setVisible]=useState(true)
  return (
    <div>
    <div className={close ? 'side-bar':"side-bar2"}>
           <div className='close-div'>
               <img src={cross} alt="" className='close-icon' onClick={(()=>setClose(false))}/>
               <p onClick={(()=>setClose(false))}>Close</p>
           </div>
           <div className='nav-data'>
               <p onClick={(()=>(navigate("/Shop"),setClose(false)))}>Shop</p>
               <a className='LINK' href="" target={'_blank'} onClick={(()=>(setClose(false)))}>About</a>
               <br />
               <a href="https://himalayausa.com/pages/store-locator" className='LINK' target={"_blank"} onClick={(()=>(setClose(false)))}>Store Locator</a>
           </div>
               <hr className='hr'/>
           <div className='account-data'>
               <h3>My Account</h3>
               <p onClick={()=>(navigate('/SignIn'),setClose(false))}>Sign in</p>
               <p onClick={()=>(navigate('/Register'),setClose(false))}>Register</p>
               <p onClick={()=>(navigate('/address'),setClose(false))}>Checkout</p>
           </div>
       </div>
       <div className={toggle ? "search-div" : 'search-box'}>
           <div className="whatAreYouLookingFor">
               <p> What are you Looking for?</p>
               <img src={cross} alt="" className='searchbtn1' onClick={() => setToggle(false)} />
           </div>
           <div className="search_button">
               <input type="text" placeholder=" Search products...." className='no-outline' />
               <img src={searchbtn} alt="" className='searchbtn' onClick={()=>(navigate("/Shop"),setToggle(false))}/>
           </div>
       </div>
    <div className='notify'>
           <span className='splitfree'>FREE SHIPPING </span>
           ON ALL ORDERS OVER $35
       </div>
       <nav className='wrapper'>
       <div className='hum'>
               <img src={hum} alt="" className="Th-lines" onClick={(()=>setClose(true))} />
               <img src="https://leap.himalayawellness.com/IOD/Content/images/login/header_logo.png" alt="" className="hima" onClick={(()=>Navigate('/'))}/>
           </div>

           <div className='navbarsub'>
           <div>
                   <Link to="/Shop" onClick={()=>setVisible(false)} onMouseEnter={()=>setVisible(true)} className='LINK'>Shop</Link>
                   <div className={visible? "mega-box":"megabox1"}>
                       <div className='data'>
                           <div className='content'>
                               <div className='row'>
                                   <header>Hearbal Suppliments</header>
                                   <div className='mega-links'>
                                       <div>
                                           <NavLink to='/HerbalSupplements' className='Link'>Single Herb Suppliments</NavLink>
                                       </div>
                                       <div>
                                           <Link to='/HerbalSupplements' className='Link'>Multi-Ingredient Suppliments</Link>
                                       </div>
                                   </div>
                               </div>
                               <div className='row'>
                                   <header>Oral Care</header>
                                   <div className='mega-links'>
                                       <div>
                                           <Link to='/OralCare' className='Link'>Adult Toothpaste</Link>
                                       </div>
                                       <div>
                                           <Link to='/OralCare' className='Link'>Kids Toothpaste</Link>
                                       </div>
                                   </div>
                               </div>
                               <div className='row'>
                                   <header>Personal Care</header>
                                   <div className='mega-links'>
                                       <div>
                                           <Link to='/PersonalCare' className='Link'>Face Care</Link>
                                       </div>
                                       <div>
                                           <Link to='/PersonalCare' className='Link'>Cleansing bars</Link>
                                       </div>
                                       <div>
                                           <Link to='/PersonalCare' className='Link'>Balm</Link>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <hr />
                           <div className='content'>
                               <div className='row'>
                                   <header>Health Interests</header>
                                   <div className='mega-links'>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Blood Sugar</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Barin & Cognitive</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Digestion</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Energy & Vitality</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Hair, Skin & Nails</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Heart & Cardio</Link>
                                       </div>
                                   </div>
                               </div>
                               <div className='row'>
                                   <header>
                                       <br />
                                   </header>
                                   <div className='mega-links'>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Immune Support</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Joint & Mobility</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Liver & Cleanse</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Men's Wellness</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Respiratory</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Sleep</Link>
                                       </div>
                                   </div>
                               </div>
                               <div className='row'>
                                   <header>
                                       <br />
                                   </header>
                                   <div className='mega-links'>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Stress & Mood</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Urinary</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Weight Management</Link>
                                       </div>
                                       <div>
                                           <Link to='/HealthInterests' className='Link'>Women's Wellness</Link>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div>
                           <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1607451904" alt="" className='himg' />
                           <br />
                           <button className='himgbtn'>Feature Product</button>
                           <p className='himgp'>Find Out Why everyone loves best selling Organic Ashwagandha</p>
                       </div>
                   </div>
                   <div>
                   </div>
               </div>
               <a className='LINK' href="" target={'_blank'}>About</a>
               <a href="https://himalayausa.com/pages/store-locator" className='LINK' target={"_blank"}>Store Locator</a>
           </div>
    
           <div className="rightside-icons">
               <div className='icons'>
                   <img src="https://www.linkpicture.com/q/search_9.png" alt="" onClick={()=>setToggle(true)} className="icon-img" />
               </div>
               <div className='hover_drop-down'>
                   <div className='icons'>
                       <img src="https://www.linkpicture.com/q/userlogo.png" alt="" className="icon-img"/>
                   </div>
                   <div className='mini_drop-box'>
                       <div className='grid'>
                           <Link className='link-l' to={'/Login'}>Sign In</Link>
                           <Link className='link-l' to={'/Registration'}>Register</Link>
                           <Link className='link-l' to={'/Checkout'}>Checkout</Link>
                       </div>
                   </div>
               </div>
               <Link to='/Cart' className='icons'>
                   <img src="https://www.linkpicture.com/q/shopping-bag.png" alt="" className="icon-img" />
               </Link>
           </div>
           
       </nav>

   </div>
)
}

export default Navbar