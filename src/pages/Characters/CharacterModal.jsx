import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

export const CharacterModal = ({ setShow, show, element }) => {
  return (
    <Modal show={show} onHide={setShow}>
      <Modal.Header closeButton>
        <Modal.Title>{element.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col lg="6">
            <div>
              <h4>Details Info:</h4>
              <p>Gender: {element.gender}</p>
              <p>Status: {element.status}</p>
              <p>Type: {element.type ? element.type : "Unknown"}</p>
              <p>Species: {element.species}</p>
            </div>
          </Col>
          <Col lg="6">
            <div>
              <img className="img-fluid" src={element.image} alt="" />
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
