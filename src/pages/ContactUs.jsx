import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>
        Telephone number: +233553215584 <br />
        Email: ecosensus@outlook.com <br />
        Address: Mr 212 Victory St, Kasoa <br />
        Central Region, Ghana
      </p>

      <section className="social-media">
        <h2>Connect with us on Social Media</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#3b5998" />
          </a>
          <a href="https://twitter.com/eco_sensus" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color="#1da1f2" />
          </a>
          <a href="https://www.linkedin.com/company/ecosensus" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077b5" />
          </a>
          <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#e4405f" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;