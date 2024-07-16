import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-content">
          <img src="/footer-logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-text">© 2024 Your Company</p>
        </div>
      </div>
      <div className="footer-links">
        <div className="link-section">
          <h3 className="links">Links</h3>
          <a href="#" className="link">Link 1</a>
          <a href="#" className="link">Link 2</a>
        </div>
      </div>
      <div className="footer-policies">
        <div className="policy-section">
          <h3 className="policies">Policies</h3>
          <a href="#" className="policy">Policy 1</a>
          <a href="#" className="policy">Policy 2</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;