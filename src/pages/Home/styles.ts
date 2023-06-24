import styled from 'styled-components';

export const HomeContentContainer = styled.div`
	max-width: 70rem;
	margin: 0 auto 5rem auto;
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
`;

export const HomeContentTitle = styled.h2`
	max-width: 70rem;
	font-family: 'Baloo 2', sans-serif;
	font-size: 2rem;
	font-weight: 800;
	color: ${(props) => props.theme['base-subtitle']};
	margin: 2rem auto 3.35rem auto;
`;
