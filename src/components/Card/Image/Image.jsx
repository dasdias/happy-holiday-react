import style from './Image.module.css';
import {useContext} from 'react';
import {imgContext} from '../../../context/imgContext'

export const ImageCadr = () => {
  const { img } = useContext(imgContext);
  return (
      <img className={style.image} src={img} alt="Фон открытки" width={840} height={520} />
  )
}