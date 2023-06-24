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

	div {
		display: flex;
		align-items: center;
	}

	div > h5 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 800;
		font-size: 1.5rem;
	}

	h6 {
		margin-top: 5px;
		margin-right: 3px;
		font-size: 0.9rem;
	}

	form {
		display: flex;
		gap: 0.5rem;
		margin-left: 1.5rem;
	}
`;

export const AddToCartButton = styled.button`
	display: flex;
	align-items: center;
	border: none;
	padding: 8px;
	background: ${(props) => props.theme['brand-purple-dark']};
	color: ${(props) => props.theme['base-white']};
`;

export const ProductTag = styled.h4`
	font-size: 0.7rem;
	font-weight: 700;
	color: ${(props) => props.theme['brand-yellow-dark']};
	background-color: ${(props) => props.theme['brand-yellow-light']};
	padding: 4px 8px;
	border-radius: 100px;
`;
