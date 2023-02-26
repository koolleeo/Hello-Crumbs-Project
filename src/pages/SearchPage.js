import React from 'react';

function SearchPage() {
  return (
    <div>
      <div className='header'>
        <div className='search-container'>
          <div className='ingredients-search'>
            <h2>Ingredient Search</h2>
            <div className='search-items'>
              <div>
                <input type="text" placeholder='Search your ingredients here...' />
              </div>
              <div className='ingredients-list'>
                <h3>Ingredients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='recipes-container'>
        <h3>What can you make?</h3>
        <div className='recipes'>
          
          <div className='recipe'><h3>Recipe 1</h3></div>
          <div className='recipe'><h3>Recipe 2</h3></div>
          <div className='recipe'><h3>Recipe 3</h3></div>
          <div className='recipe'><h3>Recipe 4</h3></div>
        </div>
        
      </div>
    </div>
  );
}

export default SearchPage;
