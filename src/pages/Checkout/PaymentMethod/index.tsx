import { useState, ChangeEvent, useContext } from 'react';
import { Money } from 'phosphor-react';
import { CheckoutIcons, ContainerText } from '../styles';
import { PaymentMethodContainer, PaymentOptionsContainer } from './styles';
import { Bank, CreditCard, CurrencyDollar } from '@phosphor-icons/react';
import { CartContext } from '../../../contexts/CartContext';

export function PaymentMethod() {
	const { setPayment } = useContext(CartContext);

	const handleChangePayment = (event: ChangeEvent<HTMLInputElement>) => {
		const paymentType = event?.target.value;
		setPayment(paymentType);
	};

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
				<input type="radio" id="credito" name="payment" value="CREDITO" onChange={handleChangePayment} />
				<label htmlFor="credito">
					<span>
						<CreditCard size={16} />
					</span>
					CARTÃO DE CRÉDITO
				</label>

				<input type="radio" id="debito" name="payment" value="DEBITO" onChange={handleChangePayment} />
				<label htmlFor="debito">
					<span>
						<Bank size={16} />
					</span>
					CARTÃO DE DÉBITO
				</label>

				<input type="radio" id="dinheiro" name="payment" value="DINHEIRO" onChange={handleChangePayment} />
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
