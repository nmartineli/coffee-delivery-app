import { MapPinLine } from '@phosphor-icons/react';
import { CheckoutIcons, ContainerText, checkoutIconVariants } from '../styles';
import { AdressForm, UserAdressContainer } from './styles';
import { useState } from 'react';
import { getAdress } from '../../../services/getCep';

interface CheckoutIcons {
	variant: checkoutIconVariants;
}

interface IAdress {
	bairro: string;
	cep: string;
	complemento: string;
	ddd: string;
	gia: string;
	ibge: string;
	localidade: string;
	logradouro: string;
	siafi: string;
	uf: string;
}

export function UserAdress() {
	const [cep, setCep] = useState('');
	const [adressError, setAdressError] = useState(false);
	const [adress, setAdress] = useState<IAdress>({
		bairro: '',
		cep: '',
		complemento: '',
		ddd: '',
		gia: '',
		ibge: '',
		localidade: '',
		logradouro: '',
		siafi: '',
		uf: '',
	});

	const handleGetAdress = async (cep: string) => {
		setAdressError(false);
		setAdress({
			bairro: '',
			cep: '',
			complemento: '',
			ddd: '',
			gia: '',
			ibge: '',
			localidade: '',
			logradouro: '',
			siafi: '',
			uf: '',
		});
		const adress = await getAdress(cep);
		if (adress === undefined || adress.erro) {
			setAdressError(true);
			return;
		}
		setAdress(adress);
	};

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
				<input
					type="text"
					id="cep"
					name="cep"
					maxLength={8}
					autoComplete="off"
					placeholder="CEP"
					onChange={(e) => setCep(e.target.value)}
					onBlur={() => handleGetAdress(cep)}
				/>
				{adressError ? <p>CEP não encontrado</p> : null}
				<input placeholder="Logradouro" type="text" name="logradouro" id="logradouro" value={adress.logradouro} readOnly />
				<div>
					<input placeholder="Número" name="numero" type="text" id="numero" required />
					<input placeholder="Complemento" name="complemento" type="text" id="complemento" />
				</div>
				<div>
					<input placeholder="Bairro" type="text" name="bairro" id="bairro" readOnly value={adress.bairro} />
					<input placeholder="Cidade" type="text" name="cidade" id="cidade" readOnly value={adress.localidade} />
					<input placeholder="UF" type="text" name="uf" id="uf" readOnly value={adress.uf.toUpperCase()} />
				</div>
			</AdressForm>
		</UserAdressContainer>
	);
}
