import React from 'react';

const Categories = ({categories, filterItems}) => {

  return <div className='btn-container'>
    {categories.map((cate, index)=>{
      return <button
        type='button'
        key={index}
        className="filter-btn"
        onClick={()=>filterItems(cate)}>
          {cate}
        </button>
    }
    )}
    }
  </div>;
};

export default Categories;
