import { HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logo from '../../assets/logo-coffee-delivery.svg';

export function Header() {
	return (
		<HeaderContainer>
			<span>
				<img src={logo} alt="" />
			</span>
			<nav>
				<button>
					<MapPin size={22} weight="fill" color="#8047F8" /> São Paulo, SP
				</button>
				<a>
					<ShoppingCart size={22} weight="fill" />
				</a>
			</nav>
		</HeaderContainer>
	);
}
