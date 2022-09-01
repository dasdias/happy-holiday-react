import style from './Choices.module.css';
import { useState, useContext } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';

// const holidays = {
// 	newyear: 'Новый год',
// 	birthdayWomen: 'День рождения  Ж',
// 	birthdayMen: 'День рождения  М',
// 	womenday: '8 марта',
// 	knowledgeday: 'День знаний',
// };

export const Choices = () => {
	const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidaysContext);
  

	const toggleCoices = () => {
		setIsOpenChoices(!isOpenChoices);
	}

	

	

	return (
		<div className={style.wrapper}>
			<button onClick={() => { toggleCoices() }} className={style.button}>{holidays[holiday] || 'Выбрать праздник'}</button>
			{
				isOpenChoices && (
					<ul className={style.list}>
						{Object.entries(holidays).map((item) => (
							<li
								className={style.item}
								key={item[0]}
								onClick={() => { 
                  changeHoliday(item[0]);
                  toggleCoices()
                }}
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