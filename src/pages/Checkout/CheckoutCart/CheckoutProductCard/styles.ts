import styled from 'styled-components';

export const CheckoutProductCardContainer = styled.div`
	display: flex;
	gap: 1.25rem;
	border-bottom: 1px solid ${(props) => props.theme['base-button']};
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;
	img {
		width: 4rem;
	}
`;

export const CheckoutProductContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	h6 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1rem;
		font-weight: 400;
	}

	p {
		color: ${(props) => props.theme['base-text']};
		font-size: 1rem;
		font-weight: 700;
	}
`;

export const PriceContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-top: 0.5rem;

	form {
		display: flex;
		gap: 0.5rem;
	}
`;

export const ProductCartButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background-color: ${(props) => props.theme['base-button']};
	color: ${(props) => props.theme['base-text']};
	padding: 8px;
	font-size: 0.7rem;
	gap: 4px;

	span {
		display: flex;
		align-items: center;
		color: ${(props) => props.theme['brand-purple']};
	}

	&:hover {
		background-color: ${(props) => props.theme['base-hover']};
		cursor: pointer;
	}
`;

export const AddToCartButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	padding: 8px;
	background: ${(props) => props.theme['brand-purple']};
	color: ${(props) => props.theme['base-white']};
`;
