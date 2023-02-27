import React from 'react';
import '../App.css'
function NavigationBar() {
  return (
    <nav>
      <div className='logo'>
                <img src='/images/MyLOGO.png' alt='Logo' width={ '100px' }/>
            </div>
      <ul className='navbar'>
        <li><button><a href="/">Home</a></button></li>
        <li><button><a href="/search">Search</a></button></li>
        <li><button><a href="/favourites">Favourites</a></button></li>
        <li><button><a href="/contact">Contact</a></button></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
