import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'; // Custom CSS for additional styling

function SignIn() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', borderRadius: '15px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-start w-100">
              Email address
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-start w-100">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-decoration-none ms-4">Forgot Password?</Link> {/* Added margin */}
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
        <div className="text-center mt-4">
          <p className="mb-0">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
