import React from 'react'
import logo from '../../resources/images/logo.png'

export default function footer() {
    return (
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <div className="row">
  <div className="col">
    
    <img src={logo} width="80"></img>
    <h2>Motto</h2>
    <p style={{color:"DarkSlateGray"}}><strong>It's not how much we give but how much love we put into giving.</strong></p>
  </div>
  <div className="col">
    <h2>Company</h2>
    <h5 style={{color:"DarkSlateGray"}}>Home</h5>
    <h5 style={{color:"DarkSlateGray"}}>About</h5>
    <h5 style={{color:"DarkSlateGray"}}>Services</h5>
    <h5 style={{color:"DarkSlateGray"}}>Contact us</h5>
    
  </div>
  <div className="col">
    <h2>&nbsp;</h2>
    <h5 style={{color:"DarkSlateGray"}}>Donations</h5>
    <h5 style={{color:"DarkSlateGray"}}>Events</h5>
    <h5 style={{color:"DarkSlateGray"}}>Resources</h5>
  </div>
  <div className="col">
    <h2>More Info</h2>
    <h5 style={{color:"DarkSlateGray"}}>  <i class="fas fa-phone-alt"></i>  +91 1010101010</h5>
    <h5 style={{color:"DarkSlateGray"}}> <i class="fas fa-envelope"></i> charity@gmail.com</h5>
  </div>
  <div className="col">
    <h2>Follow us</h2>
    <p style={{color:"DarkSlateGray"}}><i class="fab fa-facebook-f"></i> &nbsp; &nbsp;
<i class="fab fa-instagram"></i>&nbsp; &nbsp;
<i class="fab fa-twitter"></i>&nbsp; &nbsp;
<i class="fab fa-linkedin-in"></i></p>
  </div>
</div>
        </div>
    )
}