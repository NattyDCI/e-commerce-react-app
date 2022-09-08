import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Footer.css";
import {IoLogoTwitter} from 'react-icons/io';
import {IoLogoFacebook} from 'react-icons/io';
import {IoLogoPinterest} from 'react-icons/io';
import {IoLogoInstagram} from 'react-icons/io';


export default function Footer() {
  return (
    <div className="footer">
    
        <div className='Cont_SocialMedia_foot'>
          
          <p>
              <h2 className='titles'>Contact Us</h2>
              <ul className='listing2'>
                  <li><b>Phone:</b> 123-456-7890</li>
                  <li><b>Email:</b>
                  <a href="mailto:email@example.com"> InteriorReachUs@example.com</a>
                  </li>
                  <li><b>Address: </b>1234 Main Street, Anytown, USA 12345</li>
          
          
              </ul>
          </p>
          <p className='logos-box'>
          
              <ul className='listing'>
              <li className='logos2'><IoLogoTwitter/></li>
              <li className='logos2'><IoLogoFacebook/></li>
              <li className='logos2'><IoLogoPinterest/></li>
              <li className='logos2'><IoLogoInstagram/></li>
          
              </ul>
          </p>
        </div>
        
        <p className='ReservedRights'>
          
          © 2022 Lulu & Georgia. All right reserved
          Privacy Policy | Terms and Conditions | Site Index | Do Not Sell My Information
        </p>


        
    </div>
  )
}