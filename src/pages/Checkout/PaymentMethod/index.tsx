import { Money } from 'phosphor-react';
import { CheckoutIcons, ContainerText } from '../styles';
import { PaymentMethodContainer, PaymentOptionsContainer } from './styles';
import { Bank, CreditCard, CurrencyDollar } from '@phosphor-icons/react';

export function PaymentMethod() {
	return (
		<PaymentMethodContainer>
			<ContainerText>
				<CheckoutIcons variant="purple">
					<CurrencyDollar size={22} />
				</CheckoutIcons>
				<div>
					<h3>Pagamento</h3>
					<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
				</div>
			</ContainerText>
			<PaymentOptionsContainer>
				<input type="radio" id="credito" name="payment" value="credito" />
				<label htmlFor="credito">
					<span>
						<CreditCard size={16} />
					</span>
					CARTÃO DE CRÉDITO
				</label>

				<input type="radio" id="debito" name="payment" value="debito" />
				<label htmlFor="debito">
					<span>
						<Bank size={16} />
					</span>
					CARTÃO DE DÉBITO
				</label>

				<input type="radio" id="dinheiro" name="payment" value="dinheiro" />
				<label htmlFor="dinheiro">
					<span>
						<Money size={16} />
					</span>
					DINHEIRO
				</label>
			</PaymentOptionsContainer>
		</PaymentMethodContainer>
	);
}
