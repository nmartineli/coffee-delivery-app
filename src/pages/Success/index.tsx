import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import { OrderDetails, SuccessIcon, SuccessPageContainer, SuccessPageContent, iconVariants } from './styles';
import image from '../../assets/delivery-image.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface SuccessIcon {
	variant: iconVariants;
}

export function Success() {
	const { order } = useContext(CartContext);

	return (
		<SuccessPageContainer>
			<h2>Uhu! Pedido confirmado</h2>
			<h3>Agora é só aguardar que logo o café chegará até você</h3>
			<SuccessPageContent>
				<OrderDetails>
					<div>
						<SuccessIcon variant="purple">
							<MapPin size={20} weight="fill" />
						</SuccessIcon>
						<span>
							<p>
								Entrega em{' '}
								<strong>
									{order?.address.logradouro}, {order?.address.numero}
								</strong>
							</p>
							<p>Farrapos - Porto Alegre, RS</p>
						</span>
					</div>
					<div>
						<SuccessIcon variant="yellow">
							<Timer size={20} weight="fill" />
						</SuccessIcon>
						<span>
							<p>Previsão de entrega</p>
							<p>
								<strong>20 min - 30 min</strong>
							</p>
						</span>
					</div>
					<div>
						<SuccessIcon variant="yellowDark">
							<CurrencyDollar size={20} />
						</SuccessIcon>
						<span>
							<p>Pagamento na entrega</p>
							<p>
								<strong>{order?.payment}</strong>
							</p>
						</span>
					</div>
				</OrderDetails>
				<img src={image} alt="ilustração de um homem em uma moto realizando a entrega de um pedido" />
			</SuccessPageContent>
		</SuccessPageContainer>
	);
}
