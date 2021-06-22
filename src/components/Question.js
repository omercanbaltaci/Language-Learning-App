import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Alert, Button, Container } from "react-bootstrap";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) findCheckedInput.checked = false;
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) setError("");
  };

  const nextClickHandler = (e) => {
    if (selected === "") return setError("Please select one of the options!");
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1)
      onSetActiveQuestion(activeQuestion + 1);
    else onSetStep(3);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "60rem" }}>
        <Card.Body>
          <div className="questioncard">
            <Card.Title>{data.question}</Card.Title>
            <Form ref={radiosWrapper}>
              <div className="mb-3">
                {data.choices.map((choice, i) => (
                  <Form.Check
                    label={choice}
                    value={choice}
                    name="group1"
                    type="radio"
                    key={i}
                    onChange={changeHandler}
                  />
                ))}
              </div>
            </Form>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" onClick={nextClickHandler}>
            Next
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Question;
