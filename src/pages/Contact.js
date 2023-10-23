/**All contact information mobile email social media etc */

import React from "react";
import WhatsApp from "../assets/contact/whatsApp.svg";
import CallDark from "../assets/contact/callDark.svg";
import EmailDark from "../assets/contact/emailDark.svg";
import ContactBg from "../assets/contact/contact.png";
import LinkedIn from "../assets/contact/linkedIn.svg";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <div className="pl-10 pr-48 py-10 lg:py-0 lg:pt-10 lg:mb-48"
    >
      <Helmet>
        {/* <title>Abhishek Shiavde | Contact</title> */}
        {/* <meta
          name="google-site-verification"
          content="7OY8ioaVt5fcQxQkWztMjCBhUOOF6PK34FC7ygPjkXA"
        /> */}
        <meta
          name="description"
          content="Contact Abhishek Shiavde for inquiries, collaborations, or any questions. Reach out via email, LinkedIn, or WhatsApp."
        />

        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <h1      className="text-center w-72 md:w-full mx-auto py-5 text-2xl font-semibold"
      >
        Contact Me
      </h1>
      <div
        className="grid grid-cols-1 md:gap-36 md:grid-cols-2 gap-4 justify-items-start mt-10"
      >
          <img
            src={ContactBg}
            className="w-96 scale-150 md:scale-125 lg:scale-100 ml-16 lg:ml-0"
            alt="contact"
          />
        <div
        className="mt-10 md:mt-0 ml-0 lg:w-11/12"
        >
          <h2>
            Feel free to reach out to me for any inquiries, collaborations, or
            if you have any questions. I'm here to help!
          </h2>
          <p>
            You can contact me through email, phone, or connect with me on
            social media.
          </p>
          <div className="mt-10 -ml-0">
            <p className="flex gap-2">
              <img src={EmailDark} alt="email" />
              <a
                href="mailto:abhishekshivade@gmail.com"
              >
                {" "}
                abhishekshivade@gmail.com
              </a>
            </p>
              <p className="flex gap-2 mt-2">
                <img src={CallDark} alt="call" />
                <a
                  href="tel:+919518973338"
                >
                  {" "}
                  +91 9518973338
                </a>
              </p>
          </div>
          <div className="flex gap-2 mt-5 -ml-0">
            <p>Connect with</p>
            <a
              href="https://wa.me/919518973338"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsApp} alt="whatsApp" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-shivade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIn} alt="linnkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
