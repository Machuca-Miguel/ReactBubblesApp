import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./style/formRegisterModal.scss";

export const FromFishRegister = ({
  fish,
  setFish,
  showFrom,
  closeShowForm,

  addFish
}) => {
  //Logic
  
  //Get info input
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFish({ ...fish, [name]: value });
  };
  //Get Img name
  const handleFileChange = (e) => {
    
    let imgName = e.target.files[0].name;

    setFish({...fish, img: imgName})

  }

 



  return (
    <Modal show={showFrom} onHide={closeShowForm}>
      <Modal.Header closeButton className="modalNavFoot">
        <Modal.Title>Add new Fish</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              autoFocus
              className="focus"
              name="name"
              value={fish.name}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 w-50 pe-1">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Size"
                className="focus "
                name="size"
                value={fish.size}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50 ps-1">
              <Form.Label>Weight </Form.Label>
              <Form.Control
                type="text"
                placeholder="Weight"
                className="focus"
                name="weight"
                value={fish.weight}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3">
              <Form.Label>Diet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Diet"
                className="focus"
                name="diet"
                value={fish.diet}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50 ps-1">
              <Form.Label>Habitat </Form.Label>
              <Form.Control
                type="text"
                placeholder="habitat"
                className="focus"
                name="habitat"
                value={fish.habitat}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Fun Fact</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fun Fact"
              className="focus"
              name="funFact"
              value={fish.funFact}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              className="focus"
              name="img"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="modalNavFoot">
        <Button variant="secondary">Close</Button>

        <Button variant="primary" onClick={addFish}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
