import { Banner } from './components/Banner';
import { ProductCard } from './components/ProductCard';
import { HomeContentContainer, HomeContentTitle } from './styles';

export function Home() {
	return (
		<>
			<Banner />
			<HomeContentTitle>Nossos cafés</HomeContentTitle>
			<HomeContentContainer>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</HomeContentContainer>
		</>
	);
}
