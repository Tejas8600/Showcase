import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";


const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Tejas8600" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/tejas_._1825" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:tejaspuri789@gmail.com.com" target="_blank">
          <GrMail />
        </a>

        <a href="https://www.linkedin.com/in/tejas-puri-27b0b612b/" target="_blank">
          < FaLinkedin/>
        </a>

        <a href="https://twitter.com/TejasPuri18" target="_blank">
          < FaTwitter/>
        </a>


      </div>
    </footer>
  );
};

export default Footer;
