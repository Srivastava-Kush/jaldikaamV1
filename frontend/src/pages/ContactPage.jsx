import "../styles/ContactPage.css";
import React from "react";

import ContactForm from "./ContactForm.jsx";

import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <ContactForm/>
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-inner">
        <div className="cards">
          <div className="card">
            <img className="card-img" src={GithubLogo} alt="Github" />
            <a
              href="https://github.com/Srivastava-Kush"
              className="profile-link green"
            >
              <span className="circle-expand" aria-hidden="true"></span>
              <span className="overlay" aria-hidden="true"></span>
              <span className="label">Github Profile</span>
            </a>
          </div>

          <div className="card">
            <img className="card-img" src={LinkedinLogo} alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/kushagra884/"
              className="profile-link blue"
            >
              <span className="circle-expand" aria-hidden="true"></span>
              <span className="overlay" aria-hidden="true"></span>
              <span className="label">Linkedin Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
