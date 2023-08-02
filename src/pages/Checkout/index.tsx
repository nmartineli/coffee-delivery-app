import { CheckoutContainer, FormContainer, CartContainer, CheckoutContent } from './styles';
import { UserAddress } from './UserAddress';
import { PaymentMethod } from './PaymentMethod';
import { CheckoutCart } from './CheckoutCart';

export function Checkout() {
	return (
		<CheckoutContainer>
			<CheckoutContent>
				<FormContainer>
					<form action="">
						<h2>Complete seu pedido</h2>
						<UserAddress />
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
