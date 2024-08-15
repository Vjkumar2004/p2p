import React, { useState } from 'react';
import './App.css';
import NavBar from './nav.jsx';
import FrondPage from './FrondPage.jsx';
import Signup from './SignupForm.jsx';
import LoginForm from './LoginForm.jsx';
import './Navbar.css';

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleSignupClick = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLoginClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <NavBar handleSignupClick={handleSignupClick} handleLoginClick={handleLoginClick} />
      {isSignUp && <Signup />}
      {isLogin && <LoginForm />}
      <FrondPage />
    </div>
  );
}

export default App;
