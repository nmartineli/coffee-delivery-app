import { Banner } from './components/Banner';
import { ProductCard } from './components/ProductCard';
import { HomeContentContainer } from './styles';

export function Home() {
	return (
		<>
			<Banner />
			<HomeContentContainer>
				<h2>Nossos cafés</h2>
				<div>
					<ProductCard />
				</div>
			</HomeContentContainer>
		</>
	);
}
