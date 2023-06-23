import { ProductCardContainer, ProductTag } from './styles';
import coffeeImage from '../../../../assets/coffee-types/01-espresso-tradicional.svg';
import { ShoppingCart } from '@phosphor-icons/react';

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
				<h4>9,90</h4>
				<form action="">
					<input type="number" name="" id="" />
					<button>
						<ShoppingCart />
					</button>
				</form>
			</div>
		</ProductCardContainer>
	);
}
