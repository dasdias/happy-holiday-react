import {createContext, useState} from 'react';
import ImgBg from '../img/card-bg.jpg';

export const imgContext = createContext({});

export const ImgContextProvider = ({ children }) => {
  const [img, setImg] = useState(ImgBg)

  return (
    <imgContext.Provider value={{img, setImg}}>
      {children}
    </imgContext.Provider>
  )
}