import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(Window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(()=> {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <i class='fa-solid fa-tree'></i>Tree
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {/* <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        主頁 Home
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link to='/encyclopedia' className='nav-links' onClick={closeMobileMenu}>
                        樹木全書 Encyclopedia
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/survey' className='nav-links' onClick={closeMobileMenu}>
                        樹木調查 Tree Survey
                    </Link>
                </li>
                <li className='nav-item'>
                    {/* <Link to='/treestagram' className='nav-links' onClick={closeMobileMenu}> */}
                    <Link to='/post' className='nav-links' onClick={closeMobileMenu}>
                        Treestagram
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                        登入 Sign-in
                    </Link>
                </li>

                <li>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    註冊 SIGN UP
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>註冊 SIGN UP</Button>}
          </div>
      </nav>
    </>
  );
}

export default Navbar
