import React, { useState } from "react";

const SignupForm = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    onSignupSuccess();
  };

  return (
    <div className="signup-form active">
      <div className="form-box solid">
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">erroe</div>}
          <h1 className="signup-text">Sign Up</h1>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            className="signup-box"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="createPassword"
            className="signup-box"
            placeholder="Create password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            className="signup-box"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="signup-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
