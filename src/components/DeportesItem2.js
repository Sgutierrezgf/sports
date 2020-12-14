import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Deportesitem2.scss';
import { connect } from 'react-redux';
import { setDeporte, deleteDeporte } from '../actions/index';
import RemoveIcon from '../assets/static/remove-icon.png';

const DeportesItem2 = (props) => {
  const { id, cover, name, description } = props;

  const handleDeleteDeporte = (itemID) => {
    props.deleteDeporte(itemID);
  };
  return (
    <div className='carousel-item2'>
      <img className='carousel-item__img2' src={cover} alt={name} />
      <div className='carousel-item__details2'>
        <p className='carousel-item__details--title2'>{name}</p>
        <p className='carousel-item__details--subtitle2'>
          {description}
        </p>
        <div>
          <img className='carousel-item__details--img2' src={RemoveIcon} alt='imgdeportes' onClick={() => handleDeleteDeporte(id)} />
        </div>
      </div>
    </div>
  );
};

DeportesItem2.propTypes = {
  cover: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

const mapDispatchToProps = {
  setDeporte,
  deleteDeporte,
};

export default connect(null, mapDispatchToProps)(DeportesItem2);
