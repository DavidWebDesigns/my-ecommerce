import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineFacebook, AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>DavidWebDesigns.com <br/> 2022  </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineFacebook />
        <AiOutlineMail />
      </p>
    </div>
  )
}

export default Footer