import React, { useState, useEffect } from "react";
import app from "../Firebase";
import "./Flashcards.scss";
import MyFlashCards from "./MyFlashCards";
import { Translator, Translate } from "react-auto-translate";
import { useAuth } from "../contexts/AuthContext";

export default function Flashcards() {
  const [learned, setLearned] = useState([]);
  const [generateFlashCards, setGenerateFlashCards] = useState(false);

  const { currentUser } = useAuth();
  const ref = app.firestore().collection("learned-words");
  const items = [];
  const flag = [];

  async function getLearned() {
    if (!currentUser) console.log("geç");
    else {
      const doc = await ref.doc(currentUser.email).get();
      if (doc.exists) {
        for (let index = 0; index < doc.data().learnedWords.length; index++) {
          items.push(doc.data().learnedWords[index]);
        }
        setLearned(items);
        setGenerateFlashCards(true);
      }
    }
    // ref.onSnapshot((querySnapshot) => {
    //   const items = [];
    //   querySnapshot.forEach((doc) => {
    //     items.push(doc.data());
    //   });
    //   setLearned(items[0].learnedWords);
    // });
  }

  useEffect(() => {
    getLearned();
  }, []);

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var count = 0;
  return (
    <div>
      <ul>
        {learned.length > 0 ? (
          learned.map((word) => {
            const x = random_item(learned);
            if (!flag.includes(x)) {
              flag.push(x);
              count++;
              if (count <= 20) {
                return (
                  <MyFlashCards
                    wordFront={x}
                    wordBack={
                      <Translator
                        from="en"
                        to="tr"
                        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE}
                      >
                        <Translate>{x}</Translate>
                      </Translator>
                    }
                    key={count}
                  />
                );
              }
            } else console.log("geç");
          })
        ) : (
          <h2 style={{ marginTop: "150px" }}>
            You haven't learned any words. <br /> Read some stories first.
          </h2>
        )}
      </ul>
    </div>
  );
}
