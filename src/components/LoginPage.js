import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit" className="btn primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
