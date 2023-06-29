import { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { ProductCard } from './components/ProductCard';
import { HomeContentContainer, HomeContentTitle } from './styles';

export interface IDrink {
	id: string;
	title: string;
	description: string;
	tags: string[];
	price: string;
	image: string;
}

export function Home() {
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

	return (
		<>
			<Banner />
			<HomeContentTitle>Nossos cafés</HomeContentTitle>
			<HomeContentContainer>
				{drinksList.map((drink) => {
					return <ProductCard key={drink.id} drink={drink} />;
				})}
			</HomeContentContainer>
		</>
	);
}
