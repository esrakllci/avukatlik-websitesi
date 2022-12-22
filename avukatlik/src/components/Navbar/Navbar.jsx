import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

const Navbar = () => {

  const [active, setActive] = useState(false)
  // const handleClick3 = () => { setActive(!active) }
  const handleClick = () => { setActive(!active) }
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.color = "#3c3c3c";
      document.getElementById("navbar").style.backgroundColor = "white";
      document.getElementById("navbar").style.transition = "background-color 0.5s";
    } else {
      document.getElementById("navbar").style.color = "white";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.transition = "background-color 0.2s";
    }
  }
  useEffect(() => {
    document.body.scrollTop = 0
    document.getElementById("navbar").style.color = "white";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition = "background-color 0.2s";
  }, []);
  return (
    <div className="navbar-base">
      <div id="navbar" className='navbar-base-pc'>
        <div className='navbar-logo'>
          <Link to="/">DEMİR HUKUK BÜROSU</Link>
        </div>
        <div className='navbar-directions'>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/Activities">Çalışma Alanları</Link>
            </li>
            <li>
              <Link to="/Contact">İletişim</Link>
            </li>
            <li>
              <Link to="/About">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidebar ${active && "active"} z-[500] md:hidden`}>
        <div className="logo-content">
          <button id="btn" onClick={() => handleClick()}>
            <HiOutlineMenuAlt2 />
          </button>
        </div>
        <ul className="nav_list">
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/activities">Çalışma Alanlarımız</Link></li>
          <li><Link to="/contact">İletişim</Link></li>
          <li><Link to="/about">Hakkımızda</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div className='social '>
          <div className='my-3'><a href="https://www.instagram.com/demirlawoff/?hl=tr" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram color='#EFEFEF' size="20px" /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar