import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <section className={`${styles.footer}`}>
        <div className="col-3">
        <p>AutismConnectHub</p>

        <p>Address & Contact</p>
        <p>1912 Fenton Ave, New Jrsey, U.S.A</p>
        <p>(270) 555-01147</p>
        <p>AutismConnectHub@connect.com</p>
        </div>

        <div className="col-3">
        <p>Quick Links</p>

        <p>Services</p>
        <p>Careers</p>
        <p>Locations</p>
        <p>Blog</p>
        </div>

        <div className="col-6">
        <p>Subscribe to AutismConnectHub News Letter</p>

       <input className="form-control" type="email" placeholder="Enter your email" />
       <button className="btn btn-outline-light text-light p-2">Subscribe</button>
        <p>By subscribing you agree to our <span className="text-decoration-underline">Privacy Policy</span></p>

        <div className={`${styles.socials}`}>
      <FaFacebook size={30} color="#1877f2" />
      <FaInstagram size={30} color="#bc2a8d" />
      <FaTwitter size={30} color="#1da1f2" />
      <FaLinkedin size={30} color="#0e76a8" />
    </div>

        </div>
    </section>
    <section className={`${styles.foot} d-flex`}>
        <div className="d-flex">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
        </div>
        <div className="">
            <p>
            <span>&copy;</span> 2023, All right reserved.
            </p>
        </div>
    </section>
    </>
  )
}

export default Footer