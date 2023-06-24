import { ProductCardContainer, ProductTag, AddToCartButton } from './styles';
import coffeeImage from '../../../../assets/coffee-types/01-espresso-tradicional.svg';
import { ShoppingCart } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';

export function ProductCard() {
	return (
		<ProductCardContainer>
			<span>
				<img src={coffeeImage} alt="" />
			</span>
			<div>
				<ProductTag>Tradicional</ProductTag>
			</div>
			<h3>Expresso Tradicional</h3>
			<p>O tradicional café feito com água quente e grãos moídos</p>
			<div>
				<h6>R$</h6>
				<h5>9,90</h5>
				<form action="">
					<QuantityInput />
					<AddToCartButton>
						<ShoppingCart size={22} weight="fill" />
					</AddToCartButton>
				</form>
			</div>
		</ProductCardContainer>
	);
}
