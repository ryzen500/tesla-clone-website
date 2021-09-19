import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = ()=> {
  return (
    <div className="header">
       <div className="header__logo">
            <img src={logo} alt='tesla Logo'/>
       </div>



       <div className="header__content"> 
         <p>Model X </p>
         <p>Model Y </p>
         <p>Model S </p>
         <p>Model 3 </p>
         <p>Solar Panel</p>
         <p>Solar roof</p>
       </div>



       <div className="header__right">
           <p>Shop</p>
           <p>Tesla Account</p>
       </div>
    </div>
  );
}

export default Header;
