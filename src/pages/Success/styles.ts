import styled from 'styled-components';

export const SuccessPageContainer = styled.div`
	margin: 3rem auto 3rem auto;
	width: 70rem;

	h2 {
		color: ${(props) => props.theme['brand-yellow-dark']};
		font-family: 'Baloo 2', sans-serif;
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
	}

	h3 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 130%;
	}
`;

export const SuccessPageContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 2.5rem;
`;

export const OrderDetails = styled.div`
	width: 33rem;

	padding: 2.5rem;

	background: linear-gradient(white, white) padding-box, linear-gradient(to right, #dbac2c, #8047f8) border-box;
	border-radius: 6px 36px 6px 36px;
	border: 1px solid transparent;

	div {
		display: flex;
		gap: 0.75rem;
		align-items: center;

		&:not(:first-child) {
			margin-top: 2rem;
		}

		p {
			color: ${(props) => props.theme['base-text']};
			font-size: 1rem;
			line-height: 130%;
		}
	}
`;

export type iconVariants = 'yellow' | 'yellowDark' | 'purple';

interface iconVariantsProps {
	variant: iconVariants;
}

const iconVariantsColors = {
	yellowDark: '#C47F17',
	yellow: '#DBAC2C',
	purple: '#8047F8',
};

export const SuccessIcon = styled.span<iconVariantsProps>`
	display: flex;
	align-items: center;
	padding: 8px;
	border-radius: 50%;
	color: ${(props) => props.theme['base-white']};

	${(props) => {
		return `
      background-color: ${iconVariantsColors[props.variant]};
    `;
	}}
`;
