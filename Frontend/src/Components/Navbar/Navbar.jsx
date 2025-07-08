import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cart_icon from '../../Assets/cart_icon.png'
import logo from '../../Assets/logo.png'
import menu_icon from '../../Assets/menu.png'
import { ShopContext } from '../../Context/ShopContext'
import './Navbar.css'



const Navbar = () => {

const {getTotalcartitems}=useContext(ShopContext);
const menuref=React.useRef(null);

    const togglemenu=(e)=>{
        menuref.current.classList.toggle('active');
        e.target.classList.toggle('open');
    }

  return (
    <>
     <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>SHOPPER</p>
      </div>

      <img className="menu-icon" onClick={togglemenu} src={menu_icon} alt="" />
        <ul ref={menuref} className="nav-menu">
        <li> <Link to='/' style={{ textDecoration: 'none' }}> Shop </Link></li>
        <li><Link to='/men' style={{ textDecoration: 'none' }}> Men</Link></li>
        <li><Link to='/women'style={{ textDecoration: 'none' }}> Women </Link></li>
        <li><Link to='/kids' style={{ textDecoration: 'none' }}> Kids</Link></li>
      </ul>
      <div className="nav-login">
        {localStorage.getItem('auth-token')?
        <button onClick={()=>{localStorage.removeItem('auth-token');
          window.location.replace('/')
        }}>Logout</button> 
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        
       <Link to='/cart'><img src={cart_icon} /></Link> 
        <div className="nav-count">{getTotalcartitems()}</div>
      </div>
      </div>
    </>
  )
}

export default Navbar
