import { Trash } from '@phosphor-icons/react';
import { QuantityInput } from '../../../../components/QuantityInput';
import { ButtonsContainer, CheckoutProductCardContainer, CheckoutProductContent, PriceContainer, RemoveButton } from './styles';
import image from '../../../../assets/coffee-types/01-espresso-tradicional.svg';

export function CheckoutProductCard() {
	return (
		<CheckoutProductCardContainer>
			<img src={image} alt="" />

			<CheckoutProductContent>
				<PriceContainer>
					<h6>Expresso Tradicional</h6>
					<p>R$ 9,90</p>
				</PriceContainer>
				<ButtonsContainer>
					<QuantityInput />
					<RemoveButton>
						<span>
							<Trash size={16} />
						</span>
						REMOVER
					</RemoveButton>
				</ButtonsContainer>
			</CheckoutProductContent>
		</CheckoutProductCardContainer>
	);
}
