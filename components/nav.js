import React from 'react'
import Link from 'next/link'
import Logo from '../static/logoNav.png';
import UserPic from '../static/user.png';


function Nav() {
  return(
    <nav className="nav">
      <ul className="navItems">
        <li className="item">
          <img src={Logo} alt="Logo Horizons" />
        </li>
        <li className="item">
          <ul className="itemLinks">
            <li className="Link">
              <Link href='/'>
                <a>Présentation</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/'>
                <a>News</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/'>
                <a>Sections</a>
              </Link>
            </li>
            <li className="Link">
              <Link href='/'>
                <a>Évennements</a>
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
