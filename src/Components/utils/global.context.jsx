import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { reducer } from './reducer';

const inisitalState = {
  theme: {
    bgLayout: 'bg-[#daedea]',
    bgNavbar: 'bg-[#c1dad6]',
    bgFooter: 'bg-[#a8c8c1]',
    bgNavCard: 'bg-[#f3ffff]',
    textColor: 'text-[#8fb5ac]',
    pathColor: 'text-[#383845]',
    bgBtn: 'bg-[#c1dad6]',
    hoverTextBtn: 'hover:text-[#f3ffff]',
    colorTextBtn: 'text-[#383845]',
    hoverBgBtn: 'hover:bg-[#7b9994]',
  },
  dentists: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
};

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inisitalState);
  const { theme, dentists, favs } = state;

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        dispatch({ type: 'GET_DENTISTS', payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider
      value={{
        theme,
        dentists,
        favs,
        dispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useGlobalStates = () => useContext(ContextGlobal);
