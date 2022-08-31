import style  from './Choices.module.css';
import { useState } from 'react';

const holidays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения  Ж',
  birthdayMen:'День рождения  М',
  womenday:'8 марта',
  knowledgeday:'День знаний',
};

export const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник');

  const toggleCoices = () => {
    setIsOpenChoices(!isOpenChoices);
  }

  const changeHoliday = (title) => {
    setHoliday(title);
    toggleCoices();
  }
  return (
    <div className={style.wrapper}>
      <button onClick={() => { toggleCoices() }} className={style.button}>{holiday}</button>
      {
        isOpenChoices && (
          <ul className={style.list}>
            {Object.entries(holidays).map((item) => (
              <li
                className={style.item}
                key={item[0]}
                onClick={() => { changeHoliday(item[1]) }}
              >
                {item[1]}
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}