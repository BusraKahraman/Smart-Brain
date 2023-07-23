import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div className='border-container'>
      <div className='white f3'>
        <span>{`${name} , your current entry count is...`}</span>
      </div>
      <div className='white f1'>
        <span>{`${entries}`}</span>
      </div>
    </div>
  );
};

export default Rank;
