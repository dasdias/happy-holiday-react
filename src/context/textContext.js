import {createContext, useContext, useState} from 'react';
import { useText } from '../hooks/useText';
import { holidaysContext } from './holidaysContext';

export const textContext = createContext({});

export const TextContextProvider = ({ children }) => {
  const {holiday} = useContext(holidaysContext)
  const [text] = useText(holiday)
  // console.log(text);

  return (
    <textContext.Provider value={{text}}>
      {children}
    </textContext.Provider>
  )
}