import styled from 'styled-components';

export const PaymentMethodContainer = styled.div`
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px;
	margin-top: 0.7rem;
	padding: 2.5rem;
`;

export const PaymentOptionsContainer = styled.div`
	display: flex;
	gap: 0.8rem;
	margin-top: 2rem;

	input[type='radio'] {
		display: none;
	}

	label {
		display: flex;
		align-items: center;
		background-color: ${(props) => props.theme['base-button']};
		color: ${(props) => props.theme['base-text']};
		font-size: 0.75rem;
		padding: 1rem;
		line-height: 0%;
		width: calc((100% - 24px) / 3);
		border-radius: 6px;
		border: 1px solid ${(props) => props.theme['base-button']};

		span {
			color: ${(props) => props.theme['brand-purple']};
			margin-right: 0.8rem;
			display: flex;
			align-items: center;
		}
	}

	label:hover {
		background-color: ${(props) => props.theme['base-hover']};
	}

	input[type='radio']:checked + label {
		background-color: ${(props) => props.theme['brand-purple-light']};
		border: 1px solid ${(props) => props.theme['brand-purple']};
	}
`;
