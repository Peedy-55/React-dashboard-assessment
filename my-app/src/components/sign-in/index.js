import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple } from '@fortawesome/free-brands-svg-icons';

import './index.css'; 
import './google.svg';

function SignInPage() {
  return (
    <div className="signInPage">
      <div className="leftSide">
        <h1>Board.</h1>
      </div>
      <div className="rightSide">
        <div className="signInCard">
          <h2 className='left'>Sign In</h2>
          <p className='left para'>Sign in to your account</p>
          <div className='hor-card'>
            <button className="btn1">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg> Sign in with Google
            </button>
            <button className="btn1">
                <FontAwesomeIcon icon={faApple} /> Sign in with Apple
            </button>
          </div>
          <form>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password">Forgot password?</a>
            <button className="signInBtn" type="submit">Sign In</button>
          </form>
          <p className='grey-text'>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
