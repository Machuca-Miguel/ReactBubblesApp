import React from "react";
import { Button, Card } from "react-bootstrap";

export const CardResultUser = ({ user, openShowForm, handleCollection, showCollection, deleteUser }) => {
  return (
    <Card className="userCard">
      <Card.Img
        variant="top"
        src={
          user.img === "" ? `/images/avatarDefault.png` : `/images/${user.img}`
        }
      />
      <Card.Body className="d-flex flex-column  gap-2">
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>Email: {user.email}</Card.Text>
        <Button onClick={openShowForm}>Add new Fish</Button>
        <Button onClick={handleCollection}>
          {showCollection ? "Hide Collection" : "Show Collection"}
        </Button>
        <Button onClick={deleteUser}>Delete User</Button>

      </Card.Body>
    </Card>
  );
};
