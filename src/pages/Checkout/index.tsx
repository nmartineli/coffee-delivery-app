import { CheckoutContainer, FormContainer, CartContainer, CheckoutContent } from './styles';
import { UserAdress } from './UserAdress';
import { PaymentMethod } from './PaymentMethod';
import { CheckoutCart } from './CheckoutCart';

export function Checkout() {
	return (
		<CheckoutContainer>
			<form action="">
				<CheckoutContent>
					<FormContainer>
						<h2>Complete seu pedido</h2>
						<UserAdress />
						<PaymentMethod />
					</FormContainer>
					<CartContainer>
						<h2>Cafés selecionados</h2>
						<CheckoutCart />
					</CartContainer>
				</CheckoutContent>
			</form>
		</CheckoutContainer>
	);
}
