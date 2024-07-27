import { createContext, useContext, useState } from "react";

const errorContext = createContext({
  error: false,
  errorText: "",
  errorExists: () => {},
  errorNotExists: () => {},
  errorMessage: () => {},
});

const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const errorExists = () => setError(true);
  const errorNotExists = () => setError(false);
  const errorMessage = (message) => {
    setErrorText(message);
  };

  return (
    <errorContext.Provider
      value={{
        error,
        errorText,
        errorExists,
        errorNotExists,
        errorMessage,
      }}>
      {children}
    </errorContext.Provider>
  );
};

function useErrorContext() {
  return useContext(errorContext);
}

export default useErrorContext;
export { errorContext, ErrorContextProvider };
