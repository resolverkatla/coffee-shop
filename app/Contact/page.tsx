// pages/info/contact.tsx

import React, { CSSProperties } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>TALK TO US!</h1>
      <p style={styles.subHeading}>
        We’d love to hear from you! Whether you have questions or just want to say hi.
      </p>

      <form style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input type="text" id="name" style={styles.input} placeholder="Your name" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input type="email" id="email" style={styles.input} placeholder="Your email" />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea id="message" style={styles.textarea} placeholder="Write your message" rows={4}></textarea>
        </div>
        <button style={styles.button} type="submit">Send Message</button>
      </form>

      {/* Social Media Links with Icons */}
      <div style={styles.contactInfo}>
        <h2 style={styles.contactHeading}>Follow Us</h2>
        <p style={styles.contactText}>Stay connected with us on social media:</p>
        <div style={styles.socialLinks}>
          <a href="https://www.facebook.com/YourIcedCoffeeBrand" target="_blank" style={styles.socialLink}>
            <FaFacebookF style={styles.icon} /> Facebook
          </a>
          <a href="https://www.instagram.com/YourIcedCoffeeBrand" target="_blank" style={styles.socialLink}>
            <FaInstagram style={styles.icon} /> Instagram
          </a>
          <a href="https://twitter.com/YourIcedCoffeeBrand" target="_blank" style={styles.socialLink}>
            <FaTwitter style={styles.icon} /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f5e9e2', // Light brown background color
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
  subHeading: {
    fontSize: '1.2rem',
    color: '#717171',
    textAlign: 'center',
    marginBottom: '2rem',
    maxWidth: '500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  inputContainer: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fafafa',
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fafafa',
    color: '#333',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#45260f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#5d4037',
  },
  contactInfo: {
    marginTop: '3rem',
    textAlign: 'center',
  },
  contactHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: '0.5rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#717171',
    marginBottom: '1rem',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.1rem',
    color: '#45260f',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  icon: {
    marginRight: '0.5rem',
  },
};

export default ContactUs;
