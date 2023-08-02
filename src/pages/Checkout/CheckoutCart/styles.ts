import styled from 'styled-components';

export const CheckoutCartContainer = styled.div`
	background-color: ${(props) => props.theme['base-card']};
	padding: 2.5rem;
	border-radius: 6px 44px 6px 44px;
`;

export const CheckoutTable = styled.div`
	margin-top: 1.5rem;

	button {
		background-color: ${(props) => props.theme['brand-yellow']};
		color: ${(props) => props.theme['base-white']};
		border: 1px solid ${(props) => props.theme['brand-yellow']};
		padding: 8px 12px;
		font-size: 0.9rem;
		font-weight: 700;
		line-height: 160%;
		width: 100%;
		margin-top: 1.5rem;
	}
	button:hover {
		background-color: ${(props) => props.theme['brand-yellow-dark']};
		cursor: pointer;
	}

	h6 {
		font-size: 0.8rem;
		color: ${(props) => props.theme['brand-purple']};
		margin: 0.3rem 0;
		font-weight: 400;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.8rem;

		p {
			display: block;
			font-size: 0.9rem;
			color: ${(props) => props.theme['base-text']};
		}

		h5 {
			font-size: 1rem;
			color: ${(props) => props.theme['base-text']};
			font-weight: 400;
		}

		h3 {
			font-size: 1.25rem;
			color: ${(props) => props.theme['base-subtitle']};
			font-weight: 700;
		}
	}
`;
