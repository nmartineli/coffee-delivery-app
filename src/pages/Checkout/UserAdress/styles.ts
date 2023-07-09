import styled from 'styled-components';

export const UserAdressContainer = styled.div`
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px;
	padding: 2.5rem;
`;

export const AdressForm = styled.div`
	div {
		display: flex;
		gap: 0.8rem;
	}

	input {
		display: block;
		border: 1px solid ${(props) => props.theme['base-button']};
		margin-top: 1rem;
		padding: 0.8rem;
		background-color: ${(props) => props.theme['base-input']};
		color: ${(props) => props.theme['base-text']};
		width: 100%;
		border-radius: 4px;
	}

	input:first-of-type {
		width: 12rem;
	}

	input:nth-of-type(3) {
		width: 3.75rem;
	}

	input:focus {
		border: 1px solid ${(props) => props.theme['brand-yellow-dark']};
	}

	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: ${(props) => props.theme['base-label']};

		opacity: 1; /* Firefox */
	}

	input:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: ${(props) => props.theme['base-label']};
	}

	input::-ms-input-placeholder {
		/* Microsoft Edge */
		color: ${(props) => props.theme['base-label']};
	}

	input:read-only {
		background-color: ${(props) => props.theme['base-hover']};
		color: ${(props) => props.theme['base-label']};
		border: 1px solid ${(props) => props.theme['base-hover']};
	}

	p {
		font-size: 0.8rem;
		color: ${(props) => props.theme['brand-purple']};
		margin-bottom: 0.5rem;
		margin-left: 0.5rem;
	}
`;
