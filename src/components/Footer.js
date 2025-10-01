import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const footerIcons = document.querySelectorAll('.footer-social a');
    footerIcons.forEach((icon, i) => {
      setTimeout(() => icon.classList.add('show'), i * 300);
    });
  }, []);

  return (
    <footer>
      <div className="footer-social">
        <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png" alt="Discord" /></a>
        <a href="https://www.youtube.com/@OfficialCryptidGames">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="YouTube" />
        </a>
        <a href="https://www.roblox.com/groups/32656125/CrypticGames#!/about">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/roblox.png" alt="Roblox" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
