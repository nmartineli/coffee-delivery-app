import { BannerContainer, BannerText } from './styles';
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react';
import bannerImage from '../../../../assets/banner-image.svg';

export function Banner() {
	return (
		<BannerContainer>
			<BannerText>
				<h2>Encontre o café perfeito para qualquer hora do dia</h2>
				<h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
				<div>
					<span>
						<ShoppingCart />
					</span>
					<p>Compra simples e segura</p>
				</div>
				<div>
					<span>
						<Package />
					</span>
					<p>Embalagem mantém o café intacto</p>
				</div>
				<div>
					<span>
						<Timer />
					</span>
					<p>Entrega rápida e rastreada</p>
				</div>
				<div>
					<span>
						<Coffee />
					</span>
					<p>O café chega fresquinho até você</p>
				</div>
			</BannerText>
			<span>
				<img src={bannerImage} />
			</span>
		</BannerContainer>
	);
}
