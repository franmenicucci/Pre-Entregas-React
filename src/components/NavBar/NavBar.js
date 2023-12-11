import React from 'react';
import { GiCoffeeBeans } from "react-icons/gi";
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';
import "bulma/css/bulma.css"
import './NavBar.css'

const NavBar = () => { 
  return(
    <nav className='navbar sticky' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <h3>CoffeeShop <GiCoffeeBeans /></h3>
        </Link>
      </div>
      
      <div className="navbar-menu">
        <div className='navbar-start'>
          <NavLink to={`/category/Capsulas`} className='nav-link' activeClassName='active-link'>Capsulas</NavLink>
          <NavLink to={`/category/Cafeteras`} className='nav-link' activeClassName='active-link'>Cafeteras</NavLink>
          <NavLink to={`/category/Accesorios`} className='nav-link' activeClassName='active-link'>Accesorios</NavLink>
        </div>
      </div>
        
      <CartWidget/>
    </nav>
  )
}



export default NavBar;



 







// DEJO ESTO COMENTADO YA QUE ME ESTABA GENERANDO UNA DUDA. (NO ES PARTE DEL CODIGO)

/* <div className="navbar-menu">
        <div className='navbar-start'>
          <NavLink to={`/category/Capsulas`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Capsulas</NavLink>
          <NavLink to={`/category/Cafeteras`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cafeteras</NavLink>
          <NavLink to={`/category/Accesorios`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
        </div>
      </div> */



















