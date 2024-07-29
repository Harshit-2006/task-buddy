import { createContext, useContext, useState } from "react";

const userDataContext = createContext({
  userData: null,
  sessionCookie: null,
  updateUserData: () => {},
  updateSessionCookie: () => {},
});

function UserDataContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [sessionCookie, setSessionCookie] = useState(null);

  const updateUserData = (data) => setUserData(data);
  const updateSessionCookie = (data) => setSessionCookie(data);

  return (
    <userDataContext.Provider
      value={{ userData, sessionCookie, updateUserData, updateSessionCookie }}>
      {children}
    </userDataContext.Provider>
  );
}

function useUserDataContext() {
  return useContext(userDataContext);
}

export default useUserDataContext;
export { useUserDataContext, UserDataContextProvider };
