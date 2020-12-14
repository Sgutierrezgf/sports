import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories2 = ({ children, title }) => (
  <div className='deportes'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories2;
