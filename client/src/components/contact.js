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
      captchaSize: "normal",
    };

    // Create a ref for the reCAPTCHA widget
    this.recaptchaRef = React.createRef();
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
        token: captchaValue,
      });

      if (response.data.success) {
        this.setState({
          sent: true,
          sending: false,
          captchaValue: null,
        });

        // Reset the CAPTCHA widget
        if (this.recaptchaRef.current) {
          this.recaptchaRef.current.reset();
        }
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

  componentDidMount() {
    const isMobile = window.innerWidth <= 768;
    this.setState({ captchaSize: isMobile ? "compact" : "normal" });

    // Optional: handle resize
    window.addEventListener("resize", this.updateCaptchaSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCaptchaSize);
  }

  updateCaptchaSize = () => {
    const isMobile = window.innerWidth <= 768;
    this.setState({ captchaSize: isMobile ? "compact" : "normal" });
  };

  render() {
    const { name, email, message, sent, sending } = this.state;

    return (
      <div className="pageContent">
        <div className="contact-container">
          <div className="contactform">
            <h1>Let's Get In Touch</h1>
            <p>Fill in the form below or download my CV.</p>
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

              <div className="form-group recaptcha">
                <ReCAPTCHA
                  ref={this.recaptchaRef}
                  sitekey="6LchC1orAAAAACMkDD_7KWCUBUyq9iV8VRn6VDxn"
                  onChange={this.handleCaptchaChange}
                  size={this.state.captchaSize}
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
            <h1>Download My CV</h1>
            <p>Get a copy of my latest CV in PDF format:</p>
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
