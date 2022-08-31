import style from './Card.module.css';
import { ImageCadr } from './Image/Image';
import { Felicitation } from './Felicitation/Felicitation';
// import BgImg from '../../img/card-bg.jpg';

export const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <ImageCadr/>
        <Felicitation/>
      </div>
    </div>
  )
}