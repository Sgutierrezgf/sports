import React from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Deporte from './Deporte';
import Carousel from './Carousel';
import DeportesItem from './DeportesItem';
import DeportesItem2 from './DeportesItem2';
import '../assets/styles/App.scss';

const Lista = ({ deportes, myDeportes }) => (
  <div className='App'>
    <Categories title='Deporte'>
      <Carousel>
        {deportes.map((item) => <DeportesItem key={item.id} {...item} />)}
      </Carousel>
    </Categories>
    {myDeportes.length > 0 && (
      <Deporte title='Mi Deporte'>
        {myDeportes.map((item) => <DeportesItem2 key={item.id} {...item} />)}
      </Deporte>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    deportes: state.deportes,
    myDeportes: state.myDeportes,
  };
};

export default connect(mapStateToProps, null)(Lista);
