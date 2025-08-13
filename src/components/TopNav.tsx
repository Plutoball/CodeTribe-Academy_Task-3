//This is the adaptive top navigation component.

import './TopNav.css'
import fullLogo from '../assets/JT-full-logo.svg'
import logo from '../assets/JT-logo.svg'
import type React from 'react';

type NavLink = {
  label: string;
  href: string;
  isButton?: boolean;
};

type TopNavProps = {
  links: NavLink[];
  theme?: 'light' | 'dark';
  useFullLogo?: boolean;
};


const TopNav : React.FC<TopNavProps> = ({
  links,
  theme = 'dark',
  useFullLogo = false,
}) => {
  const logoSrc = useFullLogo ? fullLogo : logo;

  return(
    <nav className={`topnav1 ${theme}`}>

      <div className="nav-left">
        <img src= {logoSrc} alt="JobTrack logo" className="nav-logo" />
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          {links.map((link,index) =>(
            <li key={index}>
              <a href={link.href} className={link.isButton? 'sign-in-button' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
  
export default TopNav;