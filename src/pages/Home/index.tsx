import { useContext } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Banner } from './components/Banner';
import { ProductCard } from './components/ProductCard';
import { HomeContentContainer, HomeContentTitle } from './styles';
import { CartContext } from '../../contexts/CartContext';

export function Home() {
	const drinksList = useFetchProducts();
	const { cart } = useContext(CartContext);

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
