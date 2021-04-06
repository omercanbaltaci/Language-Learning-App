import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import MyWordCard from "./MyWordCard";
import app from "../Firebase";
import { PlayContext } from "../contexts/PlayContext";
import { useSpeechSynthesis } from "react-speech-kit";

const MyCard = ({ story, filename }) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  const { cancel } = useSpeechSynthesis();

  const { playIndex, incrementPlayIndex, resetPlayIndex } = useContext(
    PlayContext
  );

  const ref = app.storage().ref(filename);

  const handleClose = () => {
    cancel();
    setShow(false);
  };

  const handleShow = () => {
    resetPlayIndex();
    setShow(true);
  };

  async function getAudio() {
    setUrl(await ref.getDownloadURL());
  }

  useEffect(() => {
    getAudio();
  }, []);

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
            </div>
            <div className="card-group">
              {story.body.split(" ").map((word, idx, color) => (
                <MyWordCard
                  len={story.body.split(" ").length}
                  idx={idx}
                  word={word}
                  color={idx <= playIndex ? "dark" : "secondary"}
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
