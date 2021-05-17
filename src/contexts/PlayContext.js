import React, { useState, createContext } from "react";

export const PlayContext = createContext(-1);

export const PlayContextProvider = ({ children }) => {
  const [playIndex, setPlayIndex] = useState(-1);
  const [rate, setRate] = useState(1);

  const incrementPlayIndex = () => setPlayIndex(playIndex + 1);

  function changeRate(e) {
    setRate(e);
  }

  return (
    <PlayContext.Provider
      value={{
        playIndex,
        rate,
        incrementPlayIndex,
        changeRate,
        resetPlayIndex: () => setPlayIndex(-1),
        resetRate: () => setRate(1),
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
