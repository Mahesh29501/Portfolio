import { useState,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bz8df8n', 'template_7vvphlq', form.current, 'MuykOr8XvUV-X_JDB')

    e.target.reset();
  };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" name="first_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" name="last_name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="phone" />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" name="message"></textarea>
                      <button type="submit"><span>Send Text</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
