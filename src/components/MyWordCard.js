import React, { useEffect, useContext, useState } from "react";
import { PlayContext } from "../contexts/PlayContext";
import { Card } from "react-bootstrap";
import { Translator, Translate } from "react-auto-translate";
import { useSpeechSynthesis } from "react-speech-kit";
import { useAuth } from "../contexts/AuthContext";
import app from "../Firebase";

const MyWordCard = ({ idx, word, len, color, body }) => {
  const { playIndex, rate, incrementPlayIndex, resetPlayIndex, resetRate } =
    useContext(PlayContext);

  const onEnd = () => {
    incrementPlayIndex();
  };

  const { speak, speaking } = useSpeechSynthesis({
    onEnd,
  });

  const { currentUser, logout } = useAuth();
  const ref = app.firestore().collection("learned-words");

  useEffect(() => {
    if (playIndex === len) {
      resetPlayIndex();
      resetRate();
    }
    if (playIndex === idx) {
      let tempWord = fixWord(word);
      speak({ text: tempWord, rate });
      if (idx + 1 === len) {
        updateDoc();
      }
    }
  }, [playIndex]);

  async function updateDoc() {
    const doc = await ref.doc(currentUser.email).get();
    if (!doc.exists) {
      const learnedWords = [];
      body
        .split(" ")
        .map((thisWord) =>
          learnedWords.includes(fixWord(thisWord))
            ? console.log("geç")
            : learnedWords.push(fixWord(thisWord))
        );
      let data = {
        learnedWords,
      };
      await ref.doc(currentUser.email).set(data);
    } else {
      const learnedWords = doc.data().learnedWords;
      body
        .split(" ")
        .map((thisWord) =>
          learnedWords.includes(fixWord(thisWord))
            ? console.log("geç")
            : learnedWords.push(fixWord(thisWord))
        );
      let data = {
        learnedWords,
      };
      await ref.doc(currentUser.email).set(data);
    }
  }

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
            googleApiKey="AIzaSyDNG9TCIGt8T3j4mQ4KqfssQxHhh1QAdMI"
          >
            <Translate>{fixWord(word)}</Translate>
          </Translator>
        )}
      </Card.Footer>
    </Card>
  );
};

export default MyWordCard;
