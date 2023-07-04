import { useContext } from 'react';
import { CheckoutProductCard } from './CheckoutProductCard';
import { CheckoutCartContainer, CheckoutTable } from './styles';
import { CartContext } from '../../../contexts/CartContext';
import { formatCashValue } from '../../../utils/formatCash';

export function CheckoutCart() {
	const { cart } = useContext(CartContext);

	const deliveryFee = 3.5;
	const orderTotalPrice = cart.reduce((sum, product) => {
		return sum + product.totalPrice;
	}, 0);

	return (
		<CheckoutCartContainer>
			{cart
				? cart.map((productCart) => {
						return <CheckoutProductCard key={productCart.id} product={productCart} />;
				  })
				: null}
			<CheckoutTable>
				<div>
					<p>Total de itens</p>
					<h5>{formatCashValue(orderTotalPrice)}</h5>
				</div>
				<div>
					<p>Entrega</p>
					<h5>{formatCashValue(deliveryFee)}</h5>
				</div>
				<div>
					<h3>Total</h3>
					<h3>{formatCashValue(deliveryFee + orderTotalPrice)}</h3>
				</div>
				<button>Confirmar pedido</button>
			</CheckoutTable>
		</CheckoutCartContainer>
	);
}
