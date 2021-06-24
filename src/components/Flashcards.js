import React, { useState, useEffect } from "react";
import app from "../Firebase";
import "./Flashcards.scss"
import MyFlashCards from "./MyFlashCards";
import { Translator, Translate } from "react-auto-translate";

export default function Flashcards() {
  const [learned, setLearned] = useState([]);

  const ref = app.firestore().collection("learned-words");

  function getLearned() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
     setLearned(items[0].learnedWords);
    
    });
  }
  useEffect(() => {
    getLearned();
  }, []);
  function random_item(items)
  {
    
  return items[Math.floor(Math.random()*items.length)];
       
  }
  var count=0;
  return (
    <div>
      <ul>
        {learned.map((word) => {
         const x= random_item(learned);
          count++
          if(count<=20){return <MyFlashCards  wordFront={ x} wordBack={<Translator
            from="en"
            to="tr"
            googleApiKey="AIzaSyDNG9TCIGt8T3j4mQ4KqfssQxHhh1QAdMI"
          >
            <Translate>{x}</Translate>
          </Translator>}  />;}
          
        })}
      </ul>
    </div>
  );
}
