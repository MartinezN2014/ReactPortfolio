import React, { useState } from "react";

function Footer() {
  const [message, setMessage] = useState('');

  return (    
    <footer>
      {message && <p className="message">{message}</p>}
      <div className="footer">
      <div id="contact-logos">
      <a href="https://github.com/MartinezN2014" rel="noreferrer" target="_blank">
        <img className="logos" src="/images/githublogo.png" alt="Github Logo" />
      </a>
      <a href="https://www.linkedin.com/in/nelson-martinez-4a838b293/" rel="noreferrer" target="_blank">
        <img className="logos" src="/images/LinkedInlogo.png" alt="Linkedin Logo" />
      </a>
    </div>
    </div>
    </footer>
  );
}

export default Footer;