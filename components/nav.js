import React from 'react'
import Link from 'next/link'
import Logo from '../static/logoNav.png';
import LogoM from '../static/logo.png';
import UserPic from '../static/user.png';





function Nav(props) {
  function MenuMobileToggle(){
    props.toggleMenu();
  }
  return(
    <nav className="nav">
      <ul className="navItems">
        <Link href='/'>
          <li className="item">
            <img src={Logo} alt="Logo Horizons" className="Logo" />
            <img src={LogoM} alt="Logo Horizons" className="Logo-m" />
          </li>
        </Link>
        <li className="item">
          <i className="fas fa-bars toggleMenu" onClick={MenuMobileToggle} ></i>
          <ul className="itemLinks">
            <li className="Link">
              <Link href='/'>
                <a>News</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/'>
                <a>Événements</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/sections'>
                <a>Sections</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/'>
                <a>Streams</a>
              </Link>
            </li>
            <li className="Link">
              <img src={UserPic} alt="" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>

  )
}

export default Nav
