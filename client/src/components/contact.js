import React, { Component } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

class contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      captchaValue: null,
      sending: false,
      sent: false,
    };
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, captchaValue } = this.state;

    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    this.setState({ sending: true });

    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${apiBaseUrl}/api/dev/send-mail`, {
        name,
        email,
        message,
        captcha: captchaValue, // optional if backend verifies
      });
      if (response.data.success) {
        this.setState({ sent: true, sending: false });
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      this.setState({ sending: false });
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCaptchaChange = (value) => {
    this.setState({ captchaValue: value });
  };

  render() {
    const { name, email, message, sent, sending } = this.state;

    return (
      <div className="contact">
        <div className="contact-container">
          <div className="contactform">
            <h1>Contact Me</h1>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={message}
                  placeholder="Your Message"
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <div className="form-group">
                <ReCAPTCHA
                  sitekey="6LchC1orAAAAACMkDD_7KWCUBUyq9iV8VRn6VDxn"
                  onChange={this.handleCaptchaChange}
                />
              </div>

              <div className="form-group">
                <button type="submit">Send</button>
              </div>

              {sending && <p className="sending-message">Sending...</p>}
              {sent && <p className="sent-message">Email sent successfully!</p>}
            </form>
          </div>

          <div className="cv-container">
            <h1>My Curriculum Vitae</h1>
            <a
              href="assets/RickySyme-CV-SoftwareDev.docx.pdf"
              download
              className="download-btn"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;