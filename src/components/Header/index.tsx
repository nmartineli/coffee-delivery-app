import { useContext } from 'react';
import { HeaderContainer, CartNotification } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import logo from '../../assets/logo-coffee-delivery.svg';
import { CartContext } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom';

export function Header() {
	const { cart } = useContext(CartContext);

	const cartQuantity = cart.length;

	return (
		<HeaderContainer>
			<span>
				<img src={logo} alt="" />
			</span>
			<nav>
				<button>
					<MapPin size={22} weight="fill" color="#8047F8" /> São Paulo, SP
				</button>

				<NavLink to="/checkout" title="checkout">
					<ShoppingCart size={22} weight="fill" />
					{cartQuantity >= 1 ? <CartNotification>1</CartNotification> : null}
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
