import React from 'react';
import PropTypes from 'prop-types';
import { GiLightBulb } from 'react-icons/gi'
import './BrewTips.css';

const BrewTips = ({ tips }) => {
  return (
    <div className="brew-tips">
      <div className="method__flex">
        <div className="icon">
        <GiLightBulb className="icon__img"/>
        </div>
        <h3 className="method__header">Brewing Tips</h3>
      </div>
      <p>{tips}</p>
    </div>
  )

};

BrewTips.propTypes = {
  tips: PropTypes.string
}

export default BrewTips;
