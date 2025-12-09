import React, { useState } from "react";
import "../styles/ContactForm.css"

const ContactForm = () => {
   
  
  //  const API_BASE = import.meta.env.VITE_API_URL || "";
  //  const url = `${API_BASE}/support/send-email`;
const url = "http://localhost:3000/support/send-email"; 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await resp.json();

      if (!resp.ok) {
        setStatus({
          loading: false,
          ok: false,
          msg: data?.message || "Failed to send",
        });
        return;
      }

      setStatus({
        loading: false,
        ok: true,
        msg: data?.message || "Message sent!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Network error. Try again.",
      });
    }
  };

  return (
    <div className="contactform-container">
      <h1 className="contactform-heading">Contact Us</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="input-field"
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="input-field"
              />
            </div>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="input-field"
            />
          </div>

          <div className="input-box">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="textarea-field"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="submit-btn"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          <div className="status-box">
            {status.ok === true && (
              <p className="success-text">{status.msg}</p>
            )}
            {status.ok === false && (
              <p className="error-text">{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
