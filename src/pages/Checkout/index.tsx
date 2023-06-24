import { MapPinLine, Money } from '@phosphor-icons/react';
import { CheckoutCart, CheckoutContainer, CheckoutIcons, CompleteOrderContainer } from './styles';
import { CheckoutProductCard } from './CheckoutProductCard';

export function Checkout() {
	return (
		<CheckoutContainer>
			<form action="">
				<CompleteOrderContainer>
					<h2>Complete seu pedido</h2>
					<div>
						<CheckoutIcons>
							<MapPinLine />
						</CheckoutIcons>
						<h3>Endereço de entrega</h3>
						<p>Informe o endereço onde deseja receber seu pedido</p>
						<input placeholder="CEP" />
						<input placeholder="Rua" />
						<input placeholder="Número" />
						<input placeholder="Complemento" />
						<input placeholder="Bairro" />
						<input placeholder="Cidade" />
						<input placeholder="UF" />
					</div>

					<div>
						<CheckoutIcons>
							<Money />
						</CheckoutIcons>
						<h3>Pagamento</h3>
						<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
						<label>
							<input type="radio" value="credito" />
							CARTÃO DE CRÉDITO
						</label>
						<label>
							<input type="radio" value="debito" />
							CARTÃO DE DÉBITO
						</label>
						<label>
							<input type="radio" value="dinheiro" />
							DINHEIRO
						</label>
					</div>
				</CompleteOrderContainer>
				<CheckoutCart>
					<h2>Cafés selecionados</h2>
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
				</CheckoutCart>
				<button>Confirmar pedido</button>
			</form>
		</CheckoutContainer>
	);
}
