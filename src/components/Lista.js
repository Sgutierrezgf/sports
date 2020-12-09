import React from 'react';
import { connect } from 'react-redux';
import Categories from './Carousel';
import Carousel from './Categories';
import DeportesItem from './DeportesItem';
import '../assets/styles/App.scss';

const Lista = ({ deportes, myDeportes }) => (
  <div className='App'>
    {myDeportes.length > 0 && (
      <Categories title='Mi Lista'>
        <Carousel>
          {myDeportes.map((item) => <DeportesItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    )}
    <Categories title='Tendencias'>
      <Carousel>
        {deportes.map((item) => <DeportesItem key={item.id} {...item} />)}
      </Carousel>
    </Categories>
  </div>
);

const mapStateToProps = (state) => {
  return {
    deportes: state.deportes,
    myDeportes: state.myDeportes,
  };
};

export default connect(mapStateToProps, null)(Lista);
