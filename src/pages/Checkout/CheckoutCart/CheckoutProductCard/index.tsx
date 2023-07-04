import { useState, useContext } from 'react';
import { Trash } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';
import {
	ButtonsContainer,
	CheckoutProductCardContainer,
	CheckoutProductContent,
	PriceContainer,
	ProductCartButton,
} from './styles';
import { CartProductProps } from '../../../../contexts/CartContext';
import { formatCashValue } from '../../../../utils/formatCash';
import { ShoppingCart } from 'phosphor-react';
import { CartContext } from '../../../../contexts/CartContext';

interface ICheckoutProductCard {
	product: CartProductProps;
}

export function CheckoutProductCard(props: ICheckoutProductCard) {
	const { handleAddToCart } = useContext(CartContext);
	const { product } = props;
	const [number, setNumber] = useState(product.quantity);

	const handleRemoveProduct = () => {
		console.log(product.id);
	};

	const productAddedToCart = {
		...product,
		quantity: number,
	};

	return (
		<CheckoutProductCardContainer>
			<img src={`./coffee-images/${product.image}`} alt="" />
			<CheckoutProductContent>
				<PriceContainer>
					<h6>{product.title}</h6>
					<p>{formatCashValue(product.totalPrice)}</p>
				</PriceContainer>
				<ButtonsContainer>
					<form onSubmit={() => handleAddToCart(event, productAddedToCart)}>
						<QuantityInput number={number} setNumber={setNumber} />
						<ProductCartButton>
							<span>
								<ShoppingCart size={16} />
							</span>
							ATUALIZAR
						</ProductCartButton>
					</form>
					<ProductCartButton type="button" onClick={handleRemoveProduct}>
						<span>
							<Trash size={16} />
						</span>
						REMOVER
					</ProductCartButton>
				</ButtonsContainer>
			</CheckoutProductContent>
		</CheckoutProductCardContainer>
	);
}
