import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    date: "",
    contact: "",
    title: "",
    author: "",
  });
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const handleSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <h1 className="mb-4">Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={selectedUser.name}
                onChange={handleChange}
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
                value={selectedUser.contact}
                onChange={handleChange}
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
                value={selectedUser.title}
                onChange={handleChange}
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
                value={selectedUser.author}
                onChange={handleChange}
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
                value={selectedUser.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Edit</Button>
        <Link to="/">
          <Button type="submit" variant="danger" className="ml-2">
            Cancel
          </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default EditUser;
