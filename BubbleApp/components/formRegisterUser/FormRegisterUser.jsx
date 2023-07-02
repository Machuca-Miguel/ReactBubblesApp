import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const FormRegisterUser = ({ user, setUser, showFormUser, closeShowRegister, setIslogged,saveUser }) => {
  
  //Get input info
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //Get Img name
  const handleFileChange = (e) => {
    let imgName = e.target.files[0].name;

    setUser({...user, img: imgName})
  }

  
  const onSubmit = () => {
    setIslogged(true);
    saveUser(user)
    closeShowRegister()
}
  return (
    <Modal show={showFormUser} onHide={closeShowRegister}>
      <Modal.Header closeButton className="modalNavFoot">
        <Modal.Title>Login</Modal.Title>
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
              value={user.name}
              onChange={handleChange}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>User email</Form.Label>
            <Form.Control
              type="text"
              placeholder="User email"
              className="focus"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </Form.Group>
      
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="focus"
              name="password"
              value={user.password}
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

      <Modal.Footer className="modalNavFoot justify-content-center">

        <Button variant="primary px-5" onClick={onSubmit}>Login</Button>
      </Modal.Footer>
    </Modal>
  );
};
