import React, { useState } from 'react';

const Input = () => {
  const [txtValue, setTexValue] = useState(''); // 동적 = state

  function onChange(e) {
    setTexValue(e.target.value);
  }

  return (
    <div>
      <input type='text' value={txtValue} onChange={onChange} />
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
