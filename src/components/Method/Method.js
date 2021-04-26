import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../../conversions';
import './Method.css';
import { GiBubbles, GiCampCookingPot } from 'react-icons/gi'

const Method = ({mash, fermentation}) => {
  const fermentationTemp = celsiusToFahrenheit(fermentation.temp.value).toFixed(0);
  const mashSteps = mash.map((step, index) => {
    const mashTemp = celsiusToFahrenheit(step.temp.value);
    return (
      <div className="method__step__instruction" key={index}>
        <p>{step.duration}min</p>
        <p>{mashTemp} &#8457;</p>
      </div>
    );
  });

  return (
    <div className='method'>
      <div className="method__flex">
        <div className="icon">
        <GiCampCookingPot className="icon__img"/>
        </div>
        <h3 className="method__header">Mash</h3>
      </div>
      <div className="method__step">{mashSteps}</div>
      <div className="method__flex">
        <div className="icon"><GiBubbles className="icon__img"/></div>
        <h3 className="method__header">Fermentation</h3>
      </div>
      <div className="method__step">
        <div className="method__step__instruction">
          <p>2-4 weeks</p>
          <p>{fermentationTemp}&#8457;</p>
        </div>
      </div>
    </div>
  )
}

Method.propTypes = {
   mash: PropTypes.arrayOf(PropTypes.object),
   fermentation: PropTypes.object
}

export default Method;
