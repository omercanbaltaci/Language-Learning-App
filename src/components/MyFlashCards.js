import { FlipCard } from "./FlipCard";
import "./Flashcards.scss";
import "flip-card-wc";

const FrontOfCard = ({ children }) => (
  <div className="card" style={{ backgroundColor: "LightSkyBlue" }}>
    <p>{children}</p>
  </div>
);

const BackOfCard = ({ children }) => (
  <div className="card" style={{ backgroundColor: "salmon" }}>
    <p>{children}</p>
  </div>
);

const MyFlashCards = ({ wordFront, wordBack, key }) => {
  return (
    <div className="column">
      <FlipCard
        variant="click"
        frontOfCard={<FrontOfCard>{wordFront}</FrontOfCard>}
        backOfCard={<BackOfCard>{wordBack}</BackOfCard>}
      />
    </div>
  );
};
export default MyFlashCards;
