import React, { useState, createContext } from "react";

export const PlayContext = createContext(-1);

export const PlayContextProvider = ({ children }) => {
  const [playIndex, setPlayIndex] = useState(-1);

  const incrementPlayIndex = () => setPlayIndex(playIndex + 1);

  return (
    <PlayContext.Provider
      value={{
        playIndex,
        incrementPlayIndex,
        resetPlayIndex: () => setPlayIndex(-1),
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};
