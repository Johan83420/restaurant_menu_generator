import React, { forwardRef } from 'react';
import '../styles/SpecialRequestInput.css';

const SpecialRequestInput = forwardRef(({ onSubmit }, ref) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const request = event.target.elements.specialRequest.value;
    onSubmit(request);
  };

  return (
    <form className="special-request-form" onSubmit={handleSubmit}>
      <input 
        ref={ref} 
        type="text" 
        name="specialRequest" 
        className="special-request-input" 
        placeholder="Enter any special requests here..." 
      />
      <button type="submit" className="special-request-button">Submit</button>
    </form>
  );
});

export default SpecialRequestInput;
