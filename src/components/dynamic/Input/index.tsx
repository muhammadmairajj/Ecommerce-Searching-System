import React from 'react';
// import './style.css';

const Input = (props: any) => {
    const { handleChange, color, name, title, value, type } = props;

  return (
    <label className='sidebar-label-container'>
        <input type={type} onChange={handleChange} name={name} value={value} />
        <span className="checkmark" style={{backgroundColor:color}}></span>
        {title}
    </label>
  )
}

export default Input