import { createContext, ReactNode, useReducer } from 'react';
import { CartProduct, cartReducer } from '../reducers/cart/reducers';
import { addToCart } from '../reducers/cart/actions';

interface CartContextType {
	cart: CartProduct[];
	addProductToCart: (cartProduct: CartProduct) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartState, dispatch] = useReducer(cartReducer, {
		cart: [],
	});

	const { cart } = cartState;

	function addProductToCart(cartProduct: CartProduct) {
		dispatch(addToCart(cartProduct));
		console.log(cart);
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addProductToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
