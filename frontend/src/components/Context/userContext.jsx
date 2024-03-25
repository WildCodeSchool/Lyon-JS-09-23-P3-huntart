import PropTypes from "prop-types";
import { createContext, useEffect, useReducer, useMemo } from "react";

export const userAuthContext = createContext();

// the function

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { authUser: action.payload };

    case "LOGOUT":
      return { authUser: null };

    default:
      return state;
  }
};
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    authUser: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <userAuthContext.Provider value={contextValue}>
      {children}
    </userAuthContext.Provider>
  );
}
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
