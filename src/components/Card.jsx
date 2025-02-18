import React from 'react'
 

const Card = ({ name, email, gender, picture } ) => {



    
  return (
    <div class="bg-gray-800 text-white p-6  m-5 rounded-lg w-64">
   <div class="flex  mb-4">
    <img alt="Profile picture placeholder" class="w-24 h-24 rounded-lg" height="100" src={picture} width="100"/>
   </div>
   <div class="text">
    <h2 class="text-xl font-bold">
     {name}
    </h2>
    <p class="text-gray-400">
     {gender}
    </p>
    <p class="text-gray-400 mb-4">
     {email}
    </p>
    <p class="text-gray-400">
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio vitae possimus expedita minus.
    </p>
   </div>
  </div>
  )
}

export default Card



