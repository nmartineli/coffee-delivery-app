import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Banner } from './components/Banner';
import { ProductCard } from './components/ProductCard';
import { HomeContentContainer, HomeContentTitle } from './styles';

export function Home() {
	const drinksList = useFetchProducts();

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
