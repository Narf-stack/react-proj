import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems]=useState(items)
  const [categories, setCategories]=useState([])

  const filterItems = (cat)=>{
    const newItems = items.filter((item) => item.category === cat)
    setMenuItems(newItems)
  }
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>menus</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
