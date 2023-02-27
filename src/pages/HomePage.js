import React from 'react';

function HomePage() {
  return (
    <div className='hero-container'>
      <div className='welcome-msg'>
      <button>Welcome to the Home Page!</button>
      </div>
      <div className='brief-about-us'>
        <button>Brief "About Us!"</button>
      </div>
      
      {/* <p>This is where you can find information about our company.</p> */}
    </div>
  );
}

export default HomePage;
