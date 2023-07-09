import { MapPinLine } from '@phosphor-icons/react';
import { CheckoutIcons, ContainerText, checkoutIconVariants } from '../styles';
import { AddressForm, UserAddressContainer } from './styles';
import { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';

interface CheckoutIcons {
	variant: checkoutIconVariants;
}

export function UserAddress() {
	const [cep, setCep] = useState('');

	const { handleGetAddress, address, addressError } = useContext(CartContext);

	return (
		<UserAddressContainer>
			<ContainerText>
				<CheckoutIcons variant={'yellowDark'}>
					<MapPinLine size={22} />
				</CheckoutIcons>
				<div>
					<h3>Endereço de entrega</h3>
					<p>Informe o endereço onde deseja receber seu pedido</p>
				</div>
			</ContainerText>

			<AddressForm>
				<input
					type="text"
					id="cep"
					name="cep"
					maxLength={8}
					autoComplete="off"
					placeholder="CEP"
					onChange={(e) => setCep(e.target.value)}
					onBlur={() => handleGetAddress(cep)}
				/>
				{addressError ? <p>CEP não encontrado</p> : null}
				<input placeholder="Logradouro" type="text" name="logradouro" id="logradouro" value={address.logradouro} readOnly />
				<div>
					<input placeholder="Número" name="numero" type="text" id="numero" required />
					<input placeholder="Complemento" name="complemento" type="text" id="complemento" />
				</div>
				<div>
					<input placeholder="Bairro" type="text" name="bairro" id="bairro" readOnly value={address.bairro} />
					<input placeholder="Cidade" type="text" name="cidade" id="cidade" readOnly value={address.localidade} />
					<input placeholder="UF" type="text" name="uf" id="uf" readOnly value={address.uf.toUpperCase()} />
				</div>
			</AddressForm>
		</UserAddressContainer>
	);
}
