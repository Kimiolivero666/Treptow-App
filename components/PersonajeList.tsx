'use client'


import React, { useState } from 'react';
import PersonajesItem from './PersonajesItem';
import { blog_data } from '@/Assets/assets';

const PersonajeList = () => {


  const[menu, setMenu] = useState('Todos')


  return (
    <div>Lista de Personajes
      <div>
        <button onClick={() => setMenu('Todos')}>Todos</button>
        <button onClick={() => setMenu('Waldeyer Norte')}>Waldeyer Norte</button>
        <button onClick={() => setMenu('Waldeyer Centro')}>Waldeyer Centro</button>
        <button onClick={() => setMenu('Waldeyer Sur')}>Waldeyer Sur</button>
        <button onClick={() => setMenu('Wittemburg')}>Wittemburg</button>
      </div>
      <div>
        {blog_data.filter((item)=> menu ==='Todos'?true:item.category===menu).map((item, index) => (
          <PersonajesItem 
            key={index} 
            image={item.image} 
            title={item.title}  
            description={item.description} 
            category={item.category}
            id={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default PersonajeList;
