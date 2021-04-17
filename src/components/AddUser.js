import React, { useContext, useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    const newUser = {
      id: uuid(),
      date,
      name,
      title,
      author,
      contact,
    };
    addUser(newUser);
    history.push("/");
  };

  return (
    <Container>
      <h1 className="mb-4">Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contact"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formTitle">
              <Form.Label>Book's Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book's Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formAuthor">
              <Form.Label>Book's Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book's Author"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formDate" className="date-input">
              <Form.Label>Borrows Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Example : 21-01-2012"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="info">
          Add
        </Button>
        <Link to="/">
          <Button type="submit" variant="danger" className="ml-2">
            Cancel
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default AddUser;
