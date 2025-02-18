// src/FuturisticButton.js
import React from 'react';

const Button = ({  onClick }) => {
  return (
   <div >
    <h2 className='mt-5 ml-10 text-white'> Click And Generate new card</h2>
     <button class= "h-10 w-40 mt-5 ml-10 text-black  font-medium  rounded  cursor-pointer  " onClick={onClick}>
        Generate
    </button>
  
   </div>
  );
};

export default Button;