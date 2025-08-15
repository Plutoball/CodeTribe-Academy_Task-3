//This is the adaptive top navigation component.

import './TopNav.css'
import fullLogo from '../assets/JT-full-logo.svg'
import logo from '../assets/JT-logo.svg'
import type React from 'react';

type NavLink = {
  href: string;
  label: string;
  isButton?: boolean
};

type NavButton = {
  label: string; 
  onClick: () => void; 
  isButton?:boolean; 
  href?: never 
}
type NavItem = NavLink | NavButton;
   
type TopNavProps = {
  links: NavItem[],
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
              {'href' in link ?(
                <a href={link.href} className={link.isButton? 'sign-in-btn' : ''}>
                {link.label}
              </a>
              ):(
                <button
                type="button"
                onClick={link.onClick}
                className={link.isButton ? 'sign-in-btn' : ''}
                style={{ background: 'none', border: 'none'}}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
  
export default TopNav;