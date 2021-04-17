import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  users: [],
};

// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  const addUser = (users) => {
    dispatch({
      type: "ADD_USER",
      payload: users,
    });
  };
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const editUser = (users) => {
    dispatch({
      type: "EDIT_USER",
      payload: users,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, addUser, removeUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
