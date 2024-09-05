import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Custom CSS for additional styling

function SignUp() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Create an Account</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-start w-100">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-start w-100">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-start w-100">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-start w-100">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
        <div className="text-center mt-4">
          <p className="mb-0">Already have an account? <Link to="/signin" className="text-decoration-none">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
