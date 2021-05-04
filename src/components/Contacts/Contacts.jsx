import "./Contacts.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { React, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = ({ elemHeight, parentStateUpd }) => {
  let location = useLocation();
  location = location.pathname.substring(1);

  useEffect(() => {
    parentStateUpd(location);
  });

  return (
    <section ref={elemHeight} id="contact">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary mb-0">
          Contact Me
        </h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Form>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  isValid="false"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" type="text" placeholder="Message" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-success"
                  size="1.5rem"
                  color="black"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
