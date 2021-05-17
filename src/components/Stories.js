import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import app from "../Firebase";
import MyCard from "./MyCard";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const ref = app.firestore().collection("stories");
  let curLevel = 0;

  function getStories() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      items.sort((a, b) => a.level - b.level);
      setStories(items);
    });
  }

  function handleLevelChange(level) {
    curLevel = level;
  }

  useEffect(() => {
    getStories();
  }, []);

  return (
    <Container>
      {stories.map((story) =>
        story.level === curLevel ? (
          <Row className="justify-content-md-center">
            <MyCard story={story} />
          </Row>
        ) : (
          <>
            <h1>
              {handleLevelChange(story.level)}Level {curLevel}
            </h1>
            <Row className="justify-content-md-center">
              <MyCard story={story} />
            </Row>
          </>
        )
      )}
    </Container>
  );
}
