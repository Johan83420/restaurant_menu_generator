
import React, { useState } from 'react';

function InputField({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter special requests..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputField;
