import React from 'react';
import logo from '../../assets/images/rs_school_js.svg'
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper wrapper">
        <div className="footer-logo">
          <a href="https://rs.school/react/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="footer-github">
          <ul className="footer-github-list">
            <li className="footer-github-item">
              <span className="text text-ruda footer-github-text">Mentor: </span>
              <a href="https://github.com/YekaterinaKarakulina" target="_blank" className="footer-github-text text">Yekaterina</a>
            </li>
            <li className="footer-github-item">
              <span className="text text-ruda footer-github-text">Teamlead: </span>
              <a href="https://github.com/JuliaSemaka" target="_blank" className="footer-github-text text">Julia</a>
            </li>
            <li className="footer-github-item">
              <span className="text text-ruda footer-github-text">Developer: </span>
              <a href="https://github.com/IvanYatsko" target="_blank" className="footer-github-text text">Ivan</a>
            </li>
            <li className="footer-github-item">
              <span className="text text-ruda footer-github-text">Developer: </span>
              <a href="https://github.com/Maxfri" target="_blank" className="footer-github-text text">Iaroslav</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-date text-ruda wrapper">
        2021©
      </div>
    </footer>
  );
};

export default Footer;
