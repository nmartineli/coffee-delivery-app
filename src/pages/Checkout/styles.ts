import styled from 'styled-components';

export const CheckoutContainer = styled.div`
	max-width: 70rem;
	margin: 0 auto;
`;

export const CheckoutContent = styled.div`
	display: flex;
	justify-content: space-between;

	h2 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1.1rem;
		font-family: 'Baloo 2', sans-serif;
		font-weight: 700;
		margin: 2.5rem 0 1rem 0;
	}
`;

export type checkoutIconVariants = 'yellowDark' | 'purple';

interface checkoutIconVariantsProps {
	variant: checkoutIconVariants;
}

const checkoutIconVariants = {
	yellowDark: '#C47F17',
	purple: '#8047F8',
};

export const CheckoutIcons = styled.span<checkoutIconVariantsProps>`
	background: transparent;

	${(props) => {
		return `
				color: ${checkoutIconVariants[props.variant]};
			`;
	}}
`;

export const ContainerText = styled.div`
	display: flex;
	gap: 0.7rem;

	h3 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 1rem;
		font-weight: 400;
	}

	p {
		color: ${(props) => props.theme['base-text']};
		font-size: 0.875rem;
	}
`;

export const FormContainer = styled.div`
	width: 40rem;
`;

export const CartContainer = styled.div`
	width: 28rem;
`;
