import * as React from "react";

import type { User } from "../libs/type";

type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */

const initialState: AuthContextType = {
  user: null,
  login: (userData: User) => {},
  logout: () => {},
};

/* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */

export const AuthContext = React.createContext<AuthContextType>(initialState);

type Action = {
  type: "LOGIN" | "LOGOUT";
  payload: User | null;
};

const authReducer: React.Reducer<AuthContextType, Action> = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  function login(userData: User) {
    dispatch({ type: "LOGIN", payload: userData });
  }

  function logout() {
    dispatch({ type: "LOGOUT", payload: null });
  }

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
