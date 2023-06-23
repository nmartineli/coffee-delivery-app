import { BannerBackgroundImage, BannerContainer, BannerText, BannerItem, iconVariants } from './styles';
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react';
import bannerImage from '../../../../assets/banner-image.svg';

interface BannerItem {
	variant: iconVariants;
}

export function Banner() {
	return (
		<BannerBackgroundImage>
			<BannerContainer>
				<BannerText>
					<h2>Encontre o café perfeito para qualquer hora do dia</h2>
					<h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
					<div>
						<div>
							<BannerItem variant={'yellowDark'}>
								<span>
									<ShoppingCart size={16} weight="fill" />
								</span>
								<p>Compra simples e segura</p>
							</BannerItem>
							<BannerItem variant={'grey'}>
								<span>
									<Package size={16} weight="fill" />
								</span>
								<p>Embalagem mantém o café intacto</p>
							</BannerItem>
						</div>
						<div>
							<BannerItem variant={'yellow'}>
								<span>
									<Timer size={16} weight="fill" />
								</span>
								<p>Entrega rápida e rastreada</p>
							</BannerItem>
							<BannerItem variant={'purple'}>
								<span>
									<Coffee size={16} weight="fill" />
								</span>
								<p>O café chega fresquinho até você</p>
							</BannerItem>
						</div>
					</div>
				</BannerText>
				<span>
					<img src={bannerImage} />
				</span>
			</BannerContainer>
		</BannerBackgroundImage>
	);
}
