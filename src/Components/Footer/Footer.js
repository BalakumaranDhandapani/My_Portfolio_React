import React from 'react'
import './Footer.css'
import { FaCopyright, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='copyrights'> Built by Bala. <FaCopyright /> Copyrights reserved.</div>
        </div>
        <div className='right'>
          <div className='social'>
            <Link to={"https://www.facebook.com/"} target='_blank' ><FaFacebook size={30} style={{ color: 'white', marginRight: "2rem" }} />  </Link>
            <Link to={"https://twitter.com/"} target='_blank' ><FaTwitter size={30} style={{ color: 'white', marginRight: "2rem" }} /></Link>
            <Link to={"https://www.linkedin.com/in/bala-kumaran-5b9bb611a"} target='_blank' ><FaLinkedin size={30} style={{ color: 'white', marginRight: "2rem" }} /></Link>
            <Link to={"https://github.com/BalakumaranDhandapani"} target='_blank' ><FaGithub size={30} style={{ color: 'white', marginRight: "2rem" }} /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer