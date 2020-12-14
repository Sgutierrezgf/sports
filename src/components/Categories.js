import React from 'react';
import '../assets/styles/components/Categories.scss';
import usuario from '../assets/static/punto.png';
import punto from '../assets/static/usuario.png';

const Categories = ({ children }) => (
  <div className='categories'>
    <div className='icons'>
      <img className='icons--img' src={usuario} alt='imgdeportes' />
      <img className='icons--img' src={punto} alt='imgdeportes' />
    </div>
    <h1 className='deportes--title'>Let`s go</h1>
    <div className='box'>
      <div className='container-1'>
        <input type='search' className='search' placeholder='Search...' />
      </div>
    </div>
    {children}
  </div>
);

export default Categories;
