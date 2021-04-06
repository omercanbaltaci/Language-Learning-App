import React, { useEffect, useContext } from "react";
import { PlayContext } from "../contexts/PlayContext";
import { Card } from "react-bootstrap";
import { Translator, Translate } from "react-auto-translate";
import { useSpeechSynthesis } from "react-speech-kit";

const MyWordCard = ({ idx, word, len, color }) => {
  const { playIndex, incrementPlayIndex, resetPlayIndex } = useContext(
    PlayContext
  );

  const onEnd = () => {
    incrementPlayIndex();
  };

  const { speak, speaking } = useSpeechSynthesis({
    onEnd,
  });

  useEffect(() => {
    if (playIndex === len) {
      resetPlayIndex();
    }
    if (playIndex === idx) {
      let tempWord = fixWord(word);
      speak({ text: tempWord });
    }
  }, [playIndex]);

  function fixWord(word_to_fix) {
    let empty = "";
    for (let index = 0; index < word_to_fix.length; index++) {
      const element = word_to_fix.charAt(index);
      if (element === "/") empty = empty + " ";
      else empty = empty + word_to_fix.charAt(index);
    }
    return empty;
  }

  return (
    <Card
      bg={speaking ? "success" : "light"}
      text={speaking ? "white" : color}
      style={{ border: 0, borderRadius: 0 }}
      id={idx}
    >
      <Card.Body>
        <strong>{fixWord(word)}</strong>
      </Card.Body>
      <Card.Footer style={{ fontSize: 10 }}>
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
