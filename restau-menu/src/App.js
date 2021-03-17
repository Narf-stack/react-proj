import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCate = ['all',...new Set(items.map((item)=> item.category))]

function App() {
  const [menuItems, setMenuItems]=useState(items)
  const [categories, setCategories]=useState(allCate)

  const filterItems = (cat)=>{
    if(cat=== 'all'){
      setMenuItems(items)
      return;
    }
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
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
