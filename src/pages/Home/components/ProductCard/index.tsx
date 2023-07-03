import { useState, useContext } from 'react';
import { ProductCardContainer, ProductTag, AddToCartButton } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { IDrink } from '../../../../hooks/useFetchProducts';
import { formatCashValue } from '../../../../utils/formatCash';
import { CartContext } from '../../../../contexts/CartContext';

interface ProductCardProps {
	drink: IDrink;
}

interface CartProductProps extends IDrink {
	quantity: number;
}

export function ProductCard(props: ProductCardProps) {
	const { cart, addProductToCart, updateProductQuantity } = useContext(CartContext);

	const [number, setNumber] = useState(() => 1);

	const { drink } = props;
	const drinkPrice = formatCashValue(Number(drink.price));

	const productAddedToCart = {
		...drink,
		quantity: number,
	};

	const findProductIndexInCart = (productBeingAdded: CartProductProps) => {
		return cart.findIndex((product) => product.id === productBeingAdded.id);
	};

	const handleAddToCart = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const productCartIndex = findProductIndexInCart(productAddedToCart);
		if (productCartIndex >= 0) {
			updateProductQuantity(productAddedToCart, productCartIndex);
			return;
		}

		addProductToCart(productAddedToCart);
	};

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
				<form onSubmit={() => handleAddToCart(event)}>
					<QuantityInput number={number} setNumber={setNumber} />
					<AddToCartButton>
						<ShoppingCart size={22} weight="fill" />
					</AddToCartButton>
				</form>
			</div>
		</ProductCardContainer>
	);
}
