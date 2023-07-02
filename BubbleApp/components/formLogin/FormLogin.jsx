import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const FormLogin = ({
  user,
  setUser,
  showLogin,
  setIslogged,
  login,
  setLogin,
  closeLogin,
  setMessage,
  message
}) => {
  //Get input info
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({...login,[name] : value });
  };



  const onSubmit = () => {
    let savedUser = localStorage.getItem("User");
    setUser(JSON.parse(savedUser));
    if(user.email === login.email && user.password === login.password){

        setIslogged(true);
        closeLogin();
        setMessage("")

    }else{

        setMessage("Email or password incorrect. Try again")
        
    }
  };

  return (
    <Modal show={showLogin} onHide={closeLogin}>
      <Modal.Header closeButton className="modalNavFoot">
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User email</Form.Label>
            <Form.Control
              type="text"
              placeholder="User email"
              className="focus"
              name="email"
              value={login.email}
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
              value={login.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      {message !== "" ? <h4 className="text-danger text-center">{message}</h4> : null}

      <Modal.Footer className="modalNavFoot justify-content-center">
        <Button variant="primary px-5" onClick={onSubmit}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
