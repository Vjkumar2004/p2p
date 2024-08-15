import React from "react";

function NavBar({ handleSignupClick }) {
  const handleClick = () => {
    handleSignupClick();
  };

  return (
    <div className="navbar">
      <div>
        <span onClick={handleClick} className="signupicon">
          Sign Up
        </span>
        <span className="loginicon">Login</span>
      </div>
    </div>
  );
}

export default NavBar;
