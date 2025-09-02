import { createContext, useContext } from "react";

export const AnonUserContext = createContext(null)

export const useAnonUser =() => useContext(AnonUserContext)