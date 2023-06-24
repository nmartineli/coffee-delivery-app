import { Trash } from '@phosphor-icons/react';
import { QuantityInput } from '../../../components/QuantityInput';
import { CheckoutProductCardContainer } from './styles';

export function CheckoutProductCard() {
	return (
		<CheckoutProductCardContainer>
			<span>
				<img src="" alt="" />
			</span>
			<div>
				<h6>Expresso Tradicional</h6>
				<p>R$ 9,90</p>
			</div>
			<div>
				<QuantityInput />
				<button>
					<span>
						<Trash />
					</span>
					<p>Remover</p>
				</button>
			</div>
		</CheckoutProductCardContainer>
	);
}
