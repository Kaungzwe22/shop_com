import React, { useState, useRef, useEffect } from 'react';
import Path from '../category/Path';
import CatMenu from '../category/CatMenu';
import ProImgZoom from './ProImgZoom';

const ProductMain = () => {
  
  return (
    <div>
      <CatMenu />
      <Path />
      <main className="shadow-md flex items-top ">
        <div className="w-[75%] flex items-top">
          <div className="me-5 p-1">
            <ProImgZoom/>
          </div>
        </div>
        <div className="w-[20%] z-9">right</div>
      </main>
    </div>
  );
};

export default ProductMain;
