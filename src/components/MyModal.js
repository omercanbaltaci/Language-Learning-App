import React from "react";
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ onClose, results, data, showModal, closeWithButton }) => {
  return (
    <Modal show={showModal} onHide={onClose} size={"lg"}>
      <Modal.Header closeButton>
        <Modal.Title>Your answers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {results.map((result, i) => (
            <li key={i} className="mb-6">
              <p>
                <strong>{result.q}</strong>
              </p>
              <p
                style={
                  result.a === data[i].answer
                    ? { backgroundColor: "green", color: "white" }
                    : { backgroundColor: "red", color: "white" }
                }
              >
                Your answer: {result.a}
              </p>
              {result.a !== data[i].answer && (
                <p style={{ background: "blue", color: "white" }}>
                  Correct answer: {data[i].answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeWithButton}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
