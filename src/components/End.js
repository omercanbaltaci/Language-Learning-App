import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { formatTime } from "../utils";

const End = ({ results, data, onReset, onAnswerCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) correct++;
    });
    setCorrectAnswers(correct);
  }, []);

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Results</Card.Title>
          <Card.Text>
            <p>
              {correctAnswers} of {data.length}
            </p>
            <p>
              <strong>
                {Math.floor((correctAnswers / data.length) * 100)}%
              </strong>
            </p>
            <p>
              <strong>Your time:</strong> {formatTime(time)}
            </p>
          </Card.Text>
          <Button
            variant="secondary"
            onClick={onAnswerCheck}
            style={{ margin: 5 }}
          >
            Check your answers
          </Button>
          <Button variant="primary" onClick={onReset} style={{ margin: 5 }}>
            Try again
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default End;
