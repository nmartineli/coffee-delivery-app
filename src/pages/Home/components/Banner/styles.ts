import styled from 'styled-components';
import backgroundImage from '../../../../assets/banner-background.svg';

export const BannerBackgroundImage = styled.div`
	background-image: url(${backgroundImage});
`;

export const BannerContainer = styled.div`
	max-width: 70rem;
	margin: 0 auto;
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
		margin: 1rem 0 3rem 0;
		font-weight: 400;
	}

	div > div {
		display: flex;
		margin: 10px 0;
	}
`;

export type iconVariants = 'yellow' | 'yellowDark' | 'grey' | 'purple';

interface iconVariantsProps {
	variant: iconVariants;
}

const iconVariants = {
	yellowDark: '#C47F17',
	yellow: '#DBAC2C',
	grey: '#574F4D',
	purple: '#8047F8',
};

export const BannerItem = styled.div<iconVariantsProps>`
	display: flex;
	align-items: center;
	gap: 12px;
	width: 50%;

	p {
		line-height: 130%;
		color: ${(props) => props.theme['base-text']};
	}

	span {
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 50%;
		color: ${(props) => props.theme['base-white']};

		${(props) => {
			return `
				background-color: ${iconVariants[props.variant]};
			`;
		}}
	}
`;

export const BannerIconBase = '';
