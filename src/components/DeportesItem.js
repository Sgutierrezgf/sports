import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Deportesitem.scss';
import { connect } from 'react-redux';
import { setDeporte, deleteDeporte } from '../actions/index';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';

const DeportesItem = (props) => {
  const { id, cover, name, price } = props;

  const handleSetDeporte = () => {
    console.log('click me');
    props.setDeporte({
      id, cover, name, price,
    });
  };
  const hanldeDeleteDeporte = (itemID) => {
    props.deleteDeporte(itemID);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={name} />
      <div className='carousel-item__details'>
        <p className='carousel-item__details--title'>{name}</p>
        <p className='carousel-item__details--subtitle'>
          {price}
        </p>
        <div>
          <img className='carousel-item__details--img' src={PlusIcon} alt='imgdeportes' onClick={handleSetDeporte} />
          <img className='carousel-item__details--img' src={RemoveIcon} alt='imgdeportes' onClick={() => hanldeDeleteDeporte(id)} />
        </div>
      </div>
    </div>
  );
};

DeportesItem.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

const mapDispatchToProps = {
  setDeporte,
  deleteDeporte,
};

export default connect(null, mapDispatchToProps)(DeportesItem);
