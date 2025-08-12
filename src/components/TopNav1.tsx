//This will be the external top navigation--found in the landing page
import React from 'react';

function TopNav1() {
    return(
    <div className = "TopNav1">
      <nav className="navbar1">
        <div className="logoA">
          <h1>JobTrack</h1>
        </div>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/blog">Blog</a></li>
          <li>
            <button>
                <a href="/register">Sign In</a>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    );
};

export default TopNav1;