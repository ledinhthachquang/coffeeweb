import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
    
  <div className="app__footer section__padding animation" id="login">
    
    <div className="waves">
      <div className="wave" id = "wave1"></div>
      <div className="wave" id = "wave2"></div>
      <div className="wave" id = "wave3"></div>
      <div className="wave" id = "wave4"></div>
    </div>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">83/15A P. Phú Trung, Quận Tân Phú, TP. HCM. </p>
        <p className="p__opensans">+84 212-344-1230</p>
        <p className="p__opensans">+84 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className='app__footer-headtext'>Hoàng Lê <div style={{display :'inline',color:'#DB9494'}}>Coffee</div> </h1>     
        <p className="p__opensans">&quot;Đánh thức giấc mơ của bạn với một tách cà phê.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Hoàng Lê <div style={{display :'inline',color:'#DB9494'}}>Coffee</div>. Hân hạnh được phục vụ.</p>
    </div>

  </div>
);

export default Footer;