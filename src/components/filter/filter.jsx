import React from 'react';
import './filter.css';

const Filter = props => {
  const { onChange } = props;
  return (
    <input className="inputFilter" onChange={e => onChange(e.target.value)} />
  );
};

export default Filter;
