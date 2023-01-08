import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the hills of Himachal" />
      <h1 className="app__header-h1">02 Nights 03Days</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Hurry Up!!! Get indulge yourself and enjoy the nature with us  </p>
      <a href="https://upi.infomattic.com/CustomPayment.php?link_id=aa642960f92d6b27aa057f1be6d15232"><button type="button" className="custom__button">Pay Now</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
