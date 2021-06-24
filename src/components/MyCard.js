import React, { useState,  useContext } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import MyWordCard from "./MyWordCard";
import { PlayContext } from "../contexts/PlayContext";
import { useSpeechSynthesis } from "react-speech-kit";
import RangeSlider from "react-bootstrap-range-slider";

const MyCard = ({ story }) => {
  const [show, setShow] = useState(false);
  const { cancel } = useSpeechSynthesis();
  

  const {
    playIndex,
    rate,
    incrementPlayIndex,
    changeRate,
    resetPlayIndex,
    resetRate,
  } = useContext(PlayContext);

  const handleClose = () => {
    cancel();
    setShow(false);
  };

  const handleShow = () => {
    resetPlayIndex();
    resetRate();
    setShow(true);
  };

  return (
    <Card style={{ width: "48rem" }}>
      <Card.Header>{story.title}</Card.Header>
      <Card.Body>
        <Button variant="primary" onClick={handleShow}>
          Read
        </Button>
        <Modal
          show={show}
          size={"lg"}
          aria-labelledby={"contained-modal-title-vcenter"}
          centered
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{story.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ marginBottom: "1rem" }}
            >
              <Button onClick={incrementPlayIndex}>Play</Button>
              <Form style={{ marginLeft: "10px", alignItems: "center" }}>
                <Form.Group style={{ marginBottom: "0rem" }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <Form.Label style={{ marginBottom: "0px" }}>
                      Rate: {rate}
                    </Form.Label>
                  </div>
                  <RangeSlider
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={(e) => changeRate(e.target.value)}
                    tooltip="off"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="card-group">
              {story.body.split(" ").map((word, idx, color, body) => (
                <MyWordCard
                  len={story.body.split(" ").length}
                  idx={idx}
                  word={word}
                  color={idx <= playIndex ? "dark" : "secondary"}
                  body={story.body}
                />
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
