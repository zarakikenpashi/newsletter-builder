import { PropsWithChildren, createContext, useContext, useState, Dispatch, SetStateAction } from "react";

// Définir l'interface pour l'utilisateur
interface User {
  name: string;
  age: number;
}

// Définir l'interface pour le contexte de l'état
interface StateContextProps {
  currentUser: User | null;
  userToken: string | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  setUserToken: (token: string | null) => void; // Typing setUserToken correctly
}

// Créer le contexte avec les types définis
const StateContext = createContext<StateContextProps>({
  currentUser: null,
  userToken: null,
  setCurrentUser: () => {},
  setUserToken: () => {},
});

// Fournisseur de contexte
export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userToken, _setUserToken] = useState<string | null>(localStorage.getItem('ACCESS_TOKEN'));

  const setUserToken = (token: string | null) => {
    _setUserToken(token);
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Hook pour utiliser le contexte
export const useStateContext = () => useContext(StateContext);
