import { useEffect, useState } from 'react';

export interface IDrink {
	id: string;
	title: string;
	description: string;
	tags: string[];
	price: string;
	image: string;
}

export const useFetchProducts = () => {
	const [drinksList, setDrinksList] = useState<IDrink[]>([]);

	useEffect(() => {
		const getData = async () => {
			fetch('/drinks.json')
				.then((response) => response.json())
				.then((response) => {
					setDrinksList(response);
				})
				.catch((error) => console.log(error));
		};

		getData();
	}, []);

	return drinksList;
};
