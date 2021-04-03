import React, { useState, useEffect, useContext, useRef } from "react";
import { PlayContext } from "../contexts/PlayContext";
import { Card, Button, Modal, ListGroup } from "react-bootstrap";
import { Translator, Translate } from "react-auto-translate";
import { useSpeechSynthesis } from "react-speech-kit";

const MyWordCard = ({ idx, word, len }) => {
  const { playIndex, incrementPlayIndex, resetPlayIndex } = useContext(
    PlayContext
  );

  const { speak, speaking } = useSpeechSynthesis({
    onEnd: incrementPlayIndex,
  });

  const my_style = {
    fontSize: 10,
  };

  useEffect(() => {
    if (playIndex === len) {
      resetPlayIndex();
    }
    if (playIndex === idx) {
      speak({ text: word });
    }
  }, [playIndex]);

  function fixWord(word_to_fix) {
    let empty = "";
    for (let index = 0; index < word_to_fix.length; index++) {
      const element = word_to_fix.charAt(index);
      if (element == "/") {
        empty = empty + " ";
      } else {
        empty = empty + word_to_fix.charAt(index);
      }
    }
    return empty;
  }

  return (
    <Card
      bg={speaking ? "success" : "light"}
      style={{ border: 0, borderRadius: 0 }}
      id={idx}
    >
      {console.log("PLAY INDEX", playIndex)}
      <Card.Body>
        <strong>{fixWord(word)}</strong>
      </Card.Body>
      <Card.Footer style={my_style}>
        {word === "the" || word === "The" ? (
          "-"
        ) : (
          <Translator
            from="en"
            to="tr"
            googleApiKey="AIzaSyA0kr4ihZ-Uf9kxtl4BntyFDySEKpq_IbA"
          >
            <Translate>{word}</Translate>
          </Translator>
        )}
      </Card.Footer>
    </Card>
  );
};

export default MyWordCard;
