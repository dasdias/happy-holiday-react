import style  from './Header.module.css';
import { Container } from "../container/Container";
import { Choices } from './Choices/Choices';

export const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            <button className={style.button}>Поменять фон</button>
          </div>
          <Choices/>
        </div>
      </Container>
    </div>
  )
}