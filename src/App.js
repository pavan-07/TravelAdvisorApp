import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import MoreInfoPage from './components/MoreInfoPage'; // Import the new page component
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/more-info" element={<MoreInfoPage />} /> {/* Route for the new page */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
