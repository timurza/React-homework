import React from 'react';
import './navBar.css';


function NavBar () {

    return (
        <section className = 'navbar'>
            <a href = '/' className = 'navbar-item'>Home</a>
            <a href = '/' className = 'navbar-item'>About</a>
            <a href = '/' className = 'navbar-item'>Portfolio</a>
            <a href = '/' className = 'navbar-item'>Contacts</a>
         </section>
    )
}

export default NavBar;