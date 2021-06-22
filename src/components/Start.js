import React from "react";
import { Card, Button, Container } from "react-bootstrap";

const Start = ({ onQuizStart }) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Start the quiz</Card.Title>
          <Card.Text>Good luck!</Card.Text>
          <Button variant="primary" onClick={onQuizStart}>
            Start
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Start;
