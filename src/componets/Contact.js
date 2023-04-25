  import React, { useState } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { FaLocationArrow } from 'react-icons/fa';
  import { faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
  import { Row, Col, Form } from 'react-bootstrap';
  import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
  import Button from '@mui/material/Button';
  import { UilLocationArrow } from '@iconscout/react-unicons'
  import SendIcon from '@mui/icons-material/Send';
  import  { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  import './Contact.css';
import { Alert, Snackbar } from '@mui/material';

  function handleClick(event) {
    event.preventDefault();
    const email = 'recipient@example.com';
    const subject = 'Example Subject';
    const message = 'Hello, this is a custom message!';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }

  function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        // Check if name, email, and message fields are non-empty
  if (!name || !email || !message) {
    toast.error(' Please fill in all fields', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  }
 
  // Check if email is valid
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    toast.error(' Please enter a valid email address', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  }


     


  
      emailjs.sendForm('service_ea5n7xf', 'template_ljlzrtn', form.current, '1XQCVpcTyFXq8nizg')
        .then((result) => {

          toast.success('🦄 Send message Succesfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });  
                              setEmail("");
            setName("");
            setMessage("");
        }, (error) => {
          toast.error('🙇   Sorry, your message could not be sent', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });        });
    };
    
  

    return (
      <>
              <ToastContainer />


        <Row>
          <Col lg={6} className="mb-4">
            <h3 className="text-center mb-4">Talk to me</h3>
            <div className="section-header mb-4">
              <a href="#" onClick={handleClick}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <h2>Email</h2>
                <p>recipient@example.com</p>
                <p>Click <SendOutlinedIcon/> to continue</p>
              </a>
            </div>
            <div className="section-header mb-4">
    <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
    <h2>WhatsApp</h2>
    <p>+1 1234567890</p>
    <a href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">Click to continue</a>
  </div>

            <div className="section-header mb-4">
              <FontAwesomeIcon icon={faFacebookMessenger} className="mr-2" />
              <h2>Messenger</h2>
              <p><a href="fb-messenger://user-thread/?user_id=myusername">Send a message</a></p>
              <p>Click <SendOutlinedIcon/> to continue</p>
            </div>
          </Col>
          <Col lg={6}>
            <h2>Send us a message</h2>
            <Form  ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} name='user_name' onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email}  name='user_email' onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" name="message"  value={message} onChange={(e) => setMessage(e.target.value)} />
              </Form.Group>

              <Button  type='submit' variant="contained" className='btn btn-lg custom-btn m-3 align-center' style={{ backgroundColor: 'black' ,fontSize:'1rem'}} endIcon={<UilLocationArrow />}>
    Send
  </Button>

          </Form>
          </Col>
        </Row>
      </>
    )
  }

  export default ContactForm;
