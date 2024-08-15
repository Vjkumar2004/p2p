import React, { useState } from "react";

const LoginForm = ({ isShowLogin }) => {

    return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
          {error && <div className="error-message">{error}</div>}
            <h1 className="signup-text">Sign Up</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="signup-box" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password</label>
            <br></br>
            <input type="password" name="password" className="signup-box" placeholder="Creacte password"  value={createpassword} onChange={(e) => setcreatepassword(e.target.value)}/>
            <label>confirm password</label>
            <br></br>
            <input type="password" name="password" className="signup-box" placeholder="Confirm password" value={conformpassword}  onChange={(e) => setconformpassword(e.target.value)}/>
            <br></br>
            <button onSubmit={handleSubmit} type="submit" value="Sign Up" className="signup-btn" >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
