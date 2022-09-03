import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useHolidays = () => {
	const [holidays, setHolidays] = useState({});

  useEffect(() => { // хук для изменения на странице, запросов на сервер, сохранение в LocalStorage
		fetch(URI_API)
			.then(responce => {
				if (responce.status !== 200) {
					throw new Error(responce.status)
				}
				return responce.json()
			})
			.then(data => setHolidays(data))
			.catch(err => console.error(err));
  }, [setHolidays]);

  return [holidays];
}