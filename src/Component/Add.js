import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addMovie } from "../js/actions/actions";

function Add() {
  const [show, setShow] = useState(false);
const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    Genre: {
      Name: "",
    },
    Title: "",
    Description: "",
    ImageURL: "",
    Rating: 0,
  });
  const handleClick = () => {
    if (newMovie.Title.length == 0) {
      alert("Please entrer un titre");
      return;
    }
    dispatch(addMovie(newMovie));
    setNewMovie({
      Genre: {
        Name: "",
      },
      Title: "",
      Description: "",
      ImageURL: "",
      Rating: 0,
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="add title name"
                autoFocus
                onChange={(e) =>
                  setNewMovie({ ...newMovie, Title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>src img</Form.Label>
              <Form.Control
                type="text"
                placeholder="add src img"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, ImageURL: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="add Rating"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, Rating: +e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="add  genre name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) =>
                  setNewMovie({ ...newMovie, Description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
