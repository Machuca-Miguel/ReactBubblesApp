import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

export const CardResultFish = ({user,deleteFish }) => {
  return user.fishes?.map((elem, index) => {
    return (
      <Card key={index} className="fishCard">
        <Card.Img variant="top" src={`/images/fishes/${elem.img}`} />
        <div className=" d-flex flex-column ">
          <Card.Body className="py-1 d-flex align-items-center justify-content-center ">
            <Card.Title className="d-flex justify-content-center mb-0">
              {elem.name}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="py-0">
              <span className="fs-6 fw-bolder">Size:</span> {elem.size}
            </ListGroup.Item>
            <ListGroup.Item className="py-0">
              <span className="fs-6 fw-bolder">Weight:</span> {elem.weight}
            </ListGroup.Item>
            <ListGroup.Item className="py-0">
              <span className="fs-6 fw-bolder">Diet:</span> {elem.diet}
            </ListGroup.Item>
            <ListGroup.Item className="py-0">
              <span className="fs-6 fw-bolder">Habitat:</span> {elem.habitat}
            </ListGroup.Item>
            <ListGroup.Item className="py-0"></ListGroup.Item>
          </ListGroup>
          <Card.Body className="py-0 d-flex justify-content-between pb-3 gap-2">
            <Card.Text className="mb-0 ">
              <span className="fs-6 fw-bolder">Fun fact:</span> {elem.funFact}
            </Card.Text>

            <Button
              onClick={() => {
                deleteFish(index);
              }}
            >
              Delete
            </Button>
          </Card.Body>
        </div>
      </Card>
    );
  });
};
