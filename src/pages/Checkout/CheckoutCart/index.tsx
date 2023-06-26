import { CheckoutProductCard } from './CheckoutProductCard';

export function CheckoutCart() {
	return (
		<>
			<CheckoutProductCard />
			<div>
				<p>Total de itens</p>
				<p>R$ 29,70</p>
			</div>
			<div>
				<p>Entrega</p>
				<p>R$ 3,50</p>
			</div>
			<div>
				<p>Total</p>
				<p>R$ 33,20</p>
			</div>
			<button>Confirmar pedido</button>
		</>
	);
}
