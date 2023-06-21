import React, { useState } from 'react';
import './styles.css';

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilterChange(e.target.value, rate);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
    onFilterChange(title, e.target.value);
  };

  return (
    <div>
      <label>
        Filter by Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Filter by Rate:
        <input type="number" min="1" max="10" value={rate} onChange={handleRateChange} />
      </label>
    </div>
  );
};

export default Filter;
