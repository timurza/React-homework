import React from 'react';
 import   NavBar  from '../navBar/NavBar'; 
 import './header.css'; 


function Header (){

    return(
        <section className = 'header'>
            <section className = 'header-top'>
                <section className = 'header-top__logo'>
                   <a href ='/'className = 'header-logo'>LOGO</a> 
                 </section>
                <section className = 'header-top__navbar'>
                       <NavBar/>  
                </section>
            </section>
        </section>
    )
}

export default Header;