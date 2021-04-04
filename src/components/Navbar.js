import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

const Navbar=() =>{
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
    const extendElement = () => {
      dropdown ? setDropdown(false) : setDropdown(true);
    }
    
    return (
        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        RYANTERIOR
          </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {/* <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              
              
              
              
              <li className='nav-item'>
                <Link
                  to='/contact'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} 
                onClick={extendElement}>
              
                <Link
                  className='nav-links '>
                  Gallery 
                </Link>

                {dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu} />}
                    
                    
              </li>
              
            </ul>
            
      </nav>
    )
}

export default Navbar
