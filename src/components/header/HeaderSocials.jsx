import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href=" https://www.linkedin.com/in/riya-goel-54233922a//" target="_blank"><BsLinkedin/></a>
        <a href=" https://github.com/riyagoyal666" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials;