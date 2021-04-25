import React from 'react';
import './Method.css';
import { GiBubbles, GiCampCookingPot } from 'react-icons/gi'

export const Method = () => {
  return (
    <div className='method'>
      <div className="method__flex">
        <div className="icon">
        <GiCampCookingPot className="icon__img"/>
        </div>
        <h3 className="method__header">MASH</h3>
      </div>
    </div>
  )
}