import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="form-group">
          <label htmlFor="fullname">Phone Number:</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="btn primary">Sign Up</button>
      </form>
    </div>
  
  );
};

export default SignupForm;
