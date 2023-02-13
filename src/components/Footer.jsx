import React from 'react'
import Logo from "/Logo.png"
import "./Footer.css"
import face from "/face.png"
import insta from "/insta.png"
import twitter from "/twitter.png"
const Footer = () => {
  return (
    <div  className=" bg">
        <img src={Logo} alt="Logo" className='logo2' />
        <div className='contact'>
            <p className='heading'>
                Contact Us
            </p>
            <p className='w'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className='mt'>example2020@gmail.com</p>
            <p className='mt'>(904) 443-0343</p>
        </div>
        <div className='links '>

        <p className='heading'>
            More
        </p>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
        <div className='socialLinks'>
            <p className='heading social '>Social Links</p>
            <p className='linked'>© 2022 Food Truck Example</p>
            <div className='imgContainer '>
                <img src={face} alt="facebook" /><img src={insta} alt="instagram" /><img src={twitter} alt="twitter" />
            </div>
            <p className='linked2'> © 2022 Food Truck Example</p>
        </div>
    </div>
  )
}

export default Footer