import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setModalVisible(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>Need to get in touch?</p>
          </div>
          <div className="contact-right">
            <div className="contact-form-border">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Cómo podemos ayudarte ?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="pink-border"></div>
        {modalVisible && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <p>Your form has been submitted successfully!</p>
            </div>
          </div>
        )}
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.332232845856!2d-73.98849184793792!3d40.74881704318757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c19841%3A0x5e9b9d1c59ab2304!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1652454289570!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
