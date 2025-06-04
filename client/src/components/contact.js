import React, { Component } from "react";
import axios from "axios";

class contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false, // To track whether the email is currently being sent
      sent: false,
    };
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    this.setState({ sending: true }); // Set sending state to true

    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      // Send the form data to the backend API
      const response = await axios.post(`${apiBaseUrl}/api/dev/send-mail`, {
        name,
        email,
        message,
      });
      if (response.data.success) {
        this.setState({ sent: true, sending: false });
      }
    } catch (error) {
      console.error("Error sending email: ", error);
      this.setState({ sending: false }); // Reset sending state in case of error
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, email, message, sent, sending } = this.state;

    return (
      <div className="header">
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
              <button type="submit">Send</button>
            </div>
            {sending && <p className="sending-message">Sending...</p>}
            {sent && <p className="sent-message">Email sent successfully!</p>}
          </form>
        </div>
        <div class="cv-container">
          <h1>My Curriculum Vitae</h1>
          <a
            href="assets/RickySyme-CV-SoftwareDev.docx.pdf"
            download
            class="download-btn"
          >
            Download CV (PDF)
          </a>
        </div>
      </div>
    );
  }
}
export default contact;
