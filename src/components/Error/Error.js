import React from 'react';
import PropTypes from 'prop-types';
import './Error.css'
import { FaRegSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Error = ({setError}) => {
  return (
    <div className="error"> 
      <h2>We are sorry something went wrong!</h2>
      <FaRegSadTear className="sad-face"/>
      <Link to='/' className='error-btn'>
          <button className="btn error-btn" onClick={() => setError('')}>
            Go Home
          </button>
        </Link>
    </div>
  )
}

Error.propTypes = {
  setError: PropTypes.func
}
export default Error;