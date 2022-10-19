import * as React from 'react';
import './Footer.css'
import { BrowserRouter as Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (
      <Grid container className='footer'>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Link to=''><li>Home</li></Link>
          <Link to='/cart'><li>Carrinho</li></Link>
          <Link to='/checkout'><li>Logout</li></Link>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }} className='midias'>
          <div className='ig'>
            <Link href="instagram.com">
              {<InstagramIcon></InstagramIcon>}
            </Link>
          </div>
          <div className='ig'>
            <Link to="instagram.com">
            <WhatsAppIcon></WhatsAppIcon>
            </Link>
          </div>
          <div className='ig'>
            <Link to="instagram.com">
              <YouTubeIcon></YouTubeIcon>
            </Link>
          </div>
        </Grid>
      </Grid>
  );
}





















// import React from "react";


// const Footer = () => {
//     return <div className="footer">
//                 <div className="links">
//                     <ul>
//                         <li>Home</li>
//                     </ul>
//                 </div>
//                 <div className="logo">
//                     <img src={logo} alt='logo' className='logo'></img>
//                 </div>
//                 <div className="socialMedia">
//                     < InstagramIcon></InstagramIcon>
//                     <WhatsAppIcon></WhatsAppIcon>
//                     <YouTubeIcon></YouTubeIcon>
//                 </div>
//         </div>
// }

// export default Footer;