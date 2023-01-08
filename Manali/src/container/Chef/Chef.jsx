import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Ceo's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">The Journey of 1000miles begins with a single step !!!!</p>
        </div>
        <p className="p__opensans"> Our vision is to make trips available for everyone at a very reasonable price-rates with lot of beautiful memories to capture in your life..... We believe in YOLO- (YOU ONLY LIVE ONCE) </p>
      </div>

      <div className="app__chef-sign">
        <p>Nitin</p>
        <p className="p__opensans">Ceo & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
