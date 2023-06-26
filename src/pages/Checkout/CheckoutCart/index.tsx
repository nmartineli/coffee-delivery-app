import { CheckoutProductCard } from './CheckoutProductCard';
import { CheckoutCartContainer, CheckoutTable } from './styles';

export function CheckoutCart() {
	return (
		<CheckoutCartContainer>
			<CheckoutProductCard />
			<CheckoutTable>
				<div>
					<p>Total de itens</p>
					<h5>R$ 29,70</h5>
				</div>
				<div>
					<p>Entrega</p>
					<h5>R$ 3,50</h5>
				</div>
				<div>
					<h3>Total</h3>
					<h3>R$ 33,20</h3>
				</div>
				<button>Confirmar pedido</button>
			</CheckoutTable>
		</CheckoutCartContainer>
	);
}
