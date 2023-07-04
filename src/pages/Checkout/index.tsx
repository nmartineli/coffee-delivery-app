import { CheckoutContainer, FormContainer, CartContainer, CheckoutContent } from './styles';
import { UserAdress } from './UserAdress';
import { PaymentMethod } from './PaymentMethod';
import { CheckoutCart } from './CheckoutCart';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Checkout() {
	const { cart } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutContent>
				<FormContainer>
					<form action="">
						<h2>Complete seu pedido</h2>
						<UserAdress />
						<PaymentMethod />
					</form>
				</FormContainer>
				<CartContainer>
					<h2>Cafés selecionados</h2>
					<CheckoutCart />
				</CartContainer>
			</CheckoutContent>
		</CheckoutContainer>
	);
}
