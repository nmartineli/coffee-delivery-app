import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
	max-width: 70rem;
	margin: 0 auto;

	nav {
		display: flex;
		gap: 1rem;
		align-items: center;

		button {
			display: flex;
			align-items: center;
			gap: 0.3rem;
			padding: 8px;
			background: ${(props) => props.theme['brand-purple-light']};
			color: ${(props) => props.theme['brand-purple-dark']};
			border: 0;
			font-size: 14px;
		}

		a {
			display: flex;
			align-items: center;
			padding: 8px;
			background: ${(props) => props.theme['brand-yellow-light']};
			color: ${(props) => props.theme['brand-yellow-dark']};
			border: 0;
			border-radius: 6px;
		}
	}
`;
