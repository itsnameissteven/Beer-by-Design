import React from 'react';
import PropTypes from 'prop-types';
import { literToGallon } from '../../conversions';
import './TargetData.css';

const TargetData = (props) => {
  const { volume, boilVolume, abv, srm, attenuation, originalGravity, finalGravity} = props;
  const volumeGal = literToGallon(volume.value);
  const boilVolumeGal = literToGallon(boilVolume.value);
  return (
    <div className="target">  
      <div className="target__data">
        <p className='target__data__name'>volume</p>
        <p>{volumeGal} gal</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>boil volume</p>
        <p>{boilVolumeGal} gal</p>
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
        <p className='target__data__name'>target original gravity</p>
        <p>{originalGravity}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>target final gravity</p>
        <p>{finalGravity}</p>
      </div>
      <div className="target__data">
        <p className='target__data__name'>attenuation level</p>
        <p>{attenuation}%</p>
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
