import styled from 'styled-components';

export const QuantityInputComponent = styled.div`
	width: 4.5rem;
	background-color: ${(props) => props.theme['base-button']};
	border-radius: 6px;
	display: flex;
	gap: 3px;
	justify-content: space-around;
	align-items: center;
	padding: 8px;

	button {
		font-family: 'Baloo 2', sans-serif;
		color: ${(props) => props.theme['brand-purple']};
		font-weight: 00;
		font-size: 1.3rem;
		border: none;
		line-height: 0;
		background: transparent;
		&:hover {
			color: ${(props) => props.theme['brand-purple-dark']};
		}
	}

	input {
		background: transparent;
		border: none;
		text-align: center;
		font-size: 1rem;
		width: 1.5rem;
		color: ${(props) => props.theme['base-title']};
	}

	::-webkit-input-placeholder {
		text-align: center;
	}

	:-moz-placeholder {
		text-align: center;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
`;
