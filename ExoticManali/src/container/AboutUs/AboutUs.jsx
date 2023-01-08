import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Cost Includes</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> • 01 Nights Stay in Manali Hotel</p>
        <p className="p__opensans">  • 01 Night stay in Kasol Campus</p>
        <p className="p__opensans">  • 02 Breakfast and 02 Dinners </p>
        <p className="p__opensans"> •  Rooms on a quad-sharing basis</p>
        <p className="p__opensans"> •  Local sightseeing of Manali and Kasol</p>
        <p className="p__opensans"> •  DJ and Bonfire Night</p>
        <p className="p__opensans">  • Pickup and Drop in tempo travellers/Bus </p>
        <p className="p__opensans">  • Guide Service</p>
      </div>
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Cost Excludes</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> • Lunch</p>
        <p className="p__opensans">  • Laundry Fees</p>
        <p className="p__opensans">  • Any kind of Entry Fees </p>
        <p className="p__opensans"> • Sightseeing of any place not mentioned in itenary</p>
        <p className="p__opensans"> •  Any additional services like Food and Beverages , Medical Facilities, etc</p>
        <p className="p__opensans"> •  Heater Charges</p>
        <p className="p__opensans">  • Any Private Expenses </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
