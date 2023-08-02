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
	const { handleGetAddress, addressAPI, addressError, setAddress } = useContext(CartContext);
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');

	const handleOnChangeNumero = (value: string) => {
		setNumero(value);
	};

	const handleOnChangeComplemento = (value: string) => {
		setComplemento(value);
	};

	const handleOnBlurNumero = (numero: string, complemento: string) => {
		setAddress({ ...addressAPI, numero, complemento });
	};

	const handleOnBlurComplemento = (numero: string, complemento: string) => {
		setAddress({ ...addressAPI, numero, complemento });
	};

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
				{addressError ? <p>Confira o endereço de entrega</p> : null}
				<input placeholder="Logradouro" type="text" name="logradouro" id="logradouro" value={addressAPI.logradouro} readOnly />
				<div>
					<input
						placeholder="Número"
						name="numero"
						type="text"
						id="numero"
						required
						onChange={(e) => handleOnChangeNumero(e.target.value)}
						onBlur={() => handleOnBlurNumero(numero, complemento)}
					/>
					<input
						placeholder="Complemento"
						name="complemento"
						type="text"
						id="complemento"
						onChange={(e) => handleOnChangeComplemento(e.target.value)}
						onBlur={() => handleOnBlurComplemento(numero, complemento)}
					/>
				</div>
				<div>
					<input placeholder="Bairro" type="text" name="bairro" id="bairro" readOnly value={addressAPI.bairro} />
					<input placeholder="Cidade" type="text" name="cidade" id="cidade" readOnly value={addressAPI.localidade} />
					<input placeholder="UF" type="text" name="uf" id="uf" readOnly value={addressAPI.uf.toUpperCase()} />
				</div>
			</AddressForm>
		</UserAddressContainer>
	);
}
