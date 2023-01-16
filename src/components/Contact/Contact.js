import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLinkedin } from 'react-icons/bs';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        toast.success('🎉 Message sent successfully.. Thank You');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, () => {
        toast.error('FAILED...');
      });
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <Container>
        <div className="contactIntro">
          <h2>Let&apos;s Connect</h2>
          <p>Want to connect with me or collaborate on projects together, You can send me a message and I&apos;ll reply as soon as I can.. Thank You.</p>
          <a className="linkedinBtn" href="https://www.linkedin.com/in/a-laarabi/">
            LinkedIn
            {' '}
            <BsLinkedin />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={6}>
              <label htmlFor="name">
                <input placeholder="Enter Name" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
            </Col>
            <Col xs={12} md={6}>
              <label htmlFor="email">
                <input placeholder="Enter Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <label htmlFor="message">
                <textarea placeholder="Message:" name="message" value={formData.message} onChange={handleChange} required />
              </label>
            </Col>
          </Row>
          <button className="submit" type="submit">Send</button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
