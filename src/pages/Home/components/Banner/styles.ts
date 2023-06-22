import styled from 'styled-components';

export const BannerContainer = styled.div`
	padding: 6rem 0;
	gap: 3.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const BannerText = styled.div`
	h2 {
		font-family: 'Baloo 2', sans-serif;
		color: ${(props) => props.theme['base-title']};
		font-size: 3rem;
		line-height: 130%;
	}

	h4 {
		font-size: 1.2rem;
		color: ${(props) => props.theme['base-subtitle']};
		line-height: 130%;
		margin: 1rem 0 4rem 0;
		font-weight: 400;
	}

	div {
		display: flex;
		flex-direction: row;
	}
`;

export const BannerIconBase = '';
