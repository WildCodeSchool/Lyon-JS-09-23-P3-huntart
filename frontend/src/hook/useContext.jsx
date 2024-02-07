import { useContext } from "react";

import { userAuthContext } from "../components/Context/userContext";

const UseAuthContext = () => {
  const contextAuth = useContext(userAuthContext);
  if (!contextAuth) {
    throw Error("AuthContext must be used inside an workoutProvider");
  }
  return contextAuth;
};
export default UseAuthContext;
