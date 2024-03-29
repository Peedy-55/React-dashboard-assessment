import {Link} from 'react-router-dom'
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
            <button className="btn1 hor-card">
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg> Sign in with Google */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_347)">
            <path d="M13.9926 7.13096C13.9926 6.55738 13.9449 6.13883 13.8419 5.70477H7.1394V8.2936H11.0736C10.9943 8.93695 10.566 9.90584 9.61414 10.5569L9.6008 10.6436L11.72 12.2478L11.8668 12.2622C13.2152 11.0452 13.9926 9.25473 13.9926 7.13096Z" fill="#4285F4"/>
            <path d="M7.13948 13.9519C9.06691 13.9519 10.685 13.3318 11.8669 12.2622L9.61422 10.5569C9.0114 10.9677 8.20233 11.2545 7.13948 11.2545C5.2517 11.2545 3.64946 10.0376 3.07831 8.35565L2.99459 8.3626L0.791024 10.0291L0.762207 10.1074C1.93612 12.3862 4.34742 13.9519 7.13948 13.9519Z" fill="#34A853"/>
            <path d="M3.07816 8.35566C2.92746 7.92161 2.84024 7.45651 2.84024 6.97597C2.84024 6.49537 2.92746 6.03033 3.07023 5.59627L3.06624 5.50383L0.835056 3.81058L0.762055 3.84451C0.27823 4.79015 0.000610352 5.85207 0.000610352 6.97597C0.000610352 8.09987 0.27823 9.16173 0.762055 10.1074L3.07816 8.35566Z" fill="#FBBC05"/>
            <path d="M7.13948 2.69735C8.47995 2.69735 9.38417 3.26317 9.89976 3.73602L11.9145 1.81375C10.6771 0.689847 9.0669 0 7.13948 0C4.34742 0 1.93612 1.5657 0.762207 3.8445L3.07038 5.59626C3.64946 3.91428 5.2517 2.69735 7.13948 2.69735Z" fill="#EB4335"/>
            </g>
            <defs>
            <clipPath id="clip0_0_347">
            <rect width="14" height="14" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <span>Sign in with Google</span>
            </button>
            <button className="btn1 hor-card">
                <FontAwesomeIcon icon={faApple} /> Sign in with Apple
            </button>
          </div>
          <form>
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password">Forgot password?</a>
            <Link to="/dashboard">
            <button className="signInBtn" type="submit">Sign In</button>
            </Link>
          </form>
          <p className='grey-text'>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
