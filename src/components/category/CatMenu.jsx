import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatMenu = () => {
  const [catIcon, setCatIcon] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/nested_categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  const renderThirdLevel = (children) => {
    return (
      <div className="h-[100%] absolute shadow-sm bg-white left-49 top-[-0.5px] z-800 border border-gray-300 py-3 pb-[1px] w-50 hidden group-hover/third:block">
        <ul>
          {children.map((item, i) => (
            <li key={i} className='group/thirdItems cursor-pointer'>
              <p className='group-hover/thirdItems:bg-gray-200 group-hover/thirdItems:text-orange-500 flex justify-between text-xs p-2'>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSecondLevel = (children) => {
    return (
      <div className="h-[100%] absolute shadow-sm bg-white left-49 top-[-1px] z-800 border border-gray-300 py-3 w-50 hidden group-hover/second:block">
        <ul>
          {children.map((item, i) => (
            <li key={i} className='group/secondItems group/third cursor-pointer'>
              <p className='group-hover/secondItems:bg-gray-200 group-hover/secondItems:text-orange-500 flex justify-between text-xs p-2'>
                {item.name}
                {item.children && <span className='hidden group-hover/secondItems:inline-block'><i className="fa-solid fa-angle-right"></i></span>}
              </p>
              {item.children && renderThirdLevel(item.children)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div  onMouseEnter={() => setCatIcon(true)} onMouseLeave={() => setCatIcon(false)} className="relative group/first py-2 w-30">
        <p className='text-sm my-3 text-blue-900 font-medium cursor-pointer'>
          Categories {catIcon ? (<i className="ms-2 fa-solid fa-angle-up"></i>) : (<i className="ms-2 fa-solid fa-angle-down"></i>)}
        </p>

        <div className="absolute shadow-sm bg-white z-800 border border-gray-300 py-3 w-50 hidden group-hover/first:block">
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx} className='group/firstItems cursor-pointer group/second'>
                <p className='group-hover/firstItems:bg-gray-200 group-hover/firstItems:text-orange-500 flex justify-between text-xs p-2'>
                  {cat.name}
                  {cat.children && <span className='hidden group-hover/firstItems:inline-block'><i className="fa-solid fa-angle-right"></i></span>}
                </p>
                {cat.children && renderSecondLevel(cat.children)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatMenu;
