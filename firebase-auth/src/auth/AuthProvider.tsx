import React, { useEffect, useState } from "react";
import { app } from "../base";

const defaultProp: AuthContextProps = {
  login: (email: string, password: string, history: string[]) => {},
  signup: (email: string, password: string, history: string[]) => {},
  currentUser: null,
};

// Contextを作成
export const AuthContext = React.createContext<AuthContextProps>(defaultProp);

// ContextのPropに使用する型
export type AuthContextProps = {
  login: (email: string, password: string, history: string[]) => void;
  signup: (email: string, password: string, history: string[]) => void;
  currentUser: firebase.default.User | null;
};

export const AuthProvider: React.FunctionComponent = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.default.User | null>(
    null
  );

  const login = async (email: string, password: string, history: string[]) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signup = async (email: string, password: string, history: string[]) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
        currentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
