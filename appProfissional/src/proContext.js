import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSetUserId = (id) => {
    setUserId(id);
  };

  const handleSetUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId: handleSetUserId, userData, setUserData: handleSetUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useUser = () => {
  return useContext(UserContext);
};
