import { MapPinLine } from '@phosphor-icons/react';
import { CheckoutIcons, ContainerText, checkoutIconVariants } from '../styles';
import { AdressForm, UserAdressContainer } from './styles';

interface CheckoutIcons {
	variant: checkoutIconVariants;
}

export function UserAdress() {
	return (
		<UserAdressContainer>
			<ContainerText>
				<CheckoutIcons variant={'yellowDark'}>
					<MapPinLine size={22} />
				</CheckoutIcons>
				<div>
					<h3>Endereço de entrega</h3>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</ContainerText>

			<AdressForm>
				<input placeholder="CEP" />
				<input placeholder="Rua" />
				<div>
					<input placeholder="Número" />
					<input placeholder="Complemento" />
				</div>
				<div>
					<input placeholder="Bairro" />
					<input placeholder="Cidade" />
					<input placeholder="UF" />
				</div>
			</AdressForm>
		</UserAdressContainer>
	);
}
