import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [portifolio1, setPortifolio1] = useState(null);
  const [portifolio2, setPortifolio2] = useState(null);
  const [portifolio3, setPortifolio3] = useState(null);
  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl, portifolio1, setPortifolio1, portifolio2, setPortifolio2, portifolio3, setPortifolio3 }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => useContext(ImageContext);
