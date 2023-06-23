import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 16rem;
	height: 20rem;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px 36px 6px 36px;
	align-items: center;

	span {
		margin-top: -1.5rem;
		margin-bottom: 0.8rem;
	}

	h3 {
		font-family: 'Baloo 2', sans-serif;
		font-size: 1.25rem;
		line-height: 130%;
		font-weight: 700;
		color: ${(props) => props.theme['base-subtitle']};
		margin-top: 1rem;
	}

	p {
		text-align: center;
		color: ${(props) => props.theme['base-label']};
		font-size: 0.9rem;
		margin-top: 0.5rem;
		margin-bottom: 2rem;
	}
`;

export const ProductTag = styled.h6`
	font-size: 0.7rem;
	font-weight: 700;
	line-height: 130%;
	color: ${(props) => props.theme['brand-yellow-dark']};
	background-color: ${(props) => props.theme['brand-yellow-light']};
	padding: 4px 8px;
`;
