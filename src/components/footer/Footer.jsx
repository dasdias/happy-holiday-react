import { Container } from '../container/Container';
import style from "./Footer.module.css";
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as Telegramm } from '../../img/tg.svg';
import { ReactComponent as Pinterest } from '../../img/pinterest.svg';
import { ReactComponent as Group } from '../../img/Group.svg';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>Design: <a href="#">Anastasia Ilina</a></p>
            <p>Сoder: <a href="#">Alex</a></p>
            <p>© HBCard, 2022</p>
          </div>
          <ul className={style.social}>
            <li className={style.item}>
              <a href="#" className={style.link}>
                <VKIcon/>
              </a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.link}>
                <Telegramm/>
              </a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.link}>
                <Pinterest/>
              </a>
            </li>
            <li className={style.item}>
              <a href="#" className={style.link}>
                <Group/>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
};