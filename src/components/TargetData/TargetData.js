import React from 'react';
import PropTypes from 'prop-types';
import './TargetData.css';

const TargetData = (props) => {
  const { volume, boilVolume, abv, srm, attenuation, originalGravity, finalGravity} = props;


  return (
    <div className="target">  
      <div className="target__data">
        <p className='target__data__name'>volume</p>
        <p>{volume?.value}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>Boil volume</p>
        <p>{boilVolume?.value}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>abv</p>
        <p>{abv}%</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>srm</p>
        <p>{srm}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>target original Gravity</p>
        <p>{originalGravity}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>target final Gravity</p>
        <p>{finalGravity}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>attenuation level</p>
        <p>{attenuation}</p>
      </div>
    </div>
  )
}

TargetData.propTypes = {
  volume: PropTypes.object,
  boilVolume: PropTypes.object,
  abv: PropTypes.number,
  srm: PropTypes.number,
  attenuation: PropTypes.number,
  finalGravity: PropTypes.number,
  originalGravity: PropTypes.number
}

export default TargetData;
