import { ProductCardContainer, ProductTag, AddToCartButton } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { IDrink } from '../../../../hooks/useFetchProducts';
import { formatCashValue } from '../../../../utils/formatCash';

interface ProductCardProps {
	drink: IDrink;
}

export function ProductCard(props: ProductCardProps) {
	const { drink } = props;
	const drinkPrice = formatCashValue(Number(drink.price));

	return (
		<ProductCardContainer>
			<span>
				<img src={`./coffee-images/${drink.image}`} alt="" />{' '}
			</span>
			<div>
				<ProductTag>Tradicional</ProductTag>
			</div>
			<h3>{drink.title}</h3>
			<p>{drink.description}</p>
			<div>
				<h5>{drinkPrice}</h5>
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
