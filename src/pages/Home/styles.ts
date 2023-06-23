import styled from 'styled-components';

export const HomeContentContainer = styled.div`
	max-width: 70rem;
	margin: 0 auto;

	h2 {
		font-family: 'Baloo 2', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		color: ${(props) => props.theme['base-subtitle']};
		margin-bottom: 3.35rem;
	}

	div {
		display: flex;
	}
`;
