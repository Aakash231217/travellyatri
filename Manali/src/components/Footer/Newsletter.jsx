import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Hurry Up !!!" />
      <h1 className="headtext__cormorant">Pay Now to Book The Seat</h1>
      <p className="p__opensans">We ran out of the bookings fast!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <a href="https://upi.infomattic.com/CustomPayment.php?link_id=d481f7b42471c5b0e6d1ff891b0255e0"><button type="button" className="custom__button">Pay Now</button></a>
    </div>
  </div>
);

export default Newsletter;
