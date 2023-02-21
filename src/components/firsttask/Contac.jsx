import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../style/Style.css";

export default function Contac() {
  return (
    <div>
      <Container fluid id="contac" className="text-center banner">
        <h3 className="display-1">Contac Me</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              className="text-center"
              id="nama"
              aria-describedby="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className="text-center"
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pesan</Form.Label>
            <Form.Control
              type="pesan"
              className="text-center"
              as="textarea"
              rows="3"
              id="pesan"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
