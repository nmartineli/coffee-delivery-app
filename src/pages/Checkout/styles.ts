import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	max-width: 70rem;
	margin: 0 auto;
`;

export const CompleteOrderContainer = styled.div`
	div {
		background-color: ${(props) => props.theme['base-card']};
		border-radius: 6px;
	}

	h3 {
	}

	p {
	}

	input {
	}
`;

export const CheckoutIcons = styled.span`
	background: transparent;
`;

export const CheckoutCart = styled.div`
	div {
		background: ${(props) => props.theme['base-card']};
		border-radius: 6px 36px 6px 36px;
	}
	button {
	}
`;
