import { createContext, ReactNode, useReducer } from 'react';
import { CartProduct, cartReducer } from '../reducers/cart/reducers';
import { addToCart, updateCart } from '../reducers/cart/actions';

interface CartContextType {
	cart: CartProduct[];
	addProductToCart: (cartProduct: CartProduct) => void;
	updateProductQuantity: (cartProduct: CartProduct, productCartIndex: number) => void;
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

	function addProductToCart(productAddedToCart: CartProduct) {
		dispatch(addToCart(productAddedToCart));
	}

	function updateProductQuantity(productAddedToCart: CartProduct, productCartIndex: number) {
		dispatch(updateCart(productAddedToCart, productCartIndex));
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addProductToCart,
				updateProductQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
