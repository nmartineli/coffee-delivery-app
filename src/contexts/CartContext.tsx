import { createContext, ReactNode, useReducer } from 'react';
import { CartProduct, cartReducer } from '../reducers/cart/reducers';
import { addToCart, updateCart } from '../reducers/cart/actions';
import { IDrink } from '../hooks/useFetchProducts';

interface CartContextType {
	cart: CartProduct[];
	addProductToCart: (cartProduct: CartProduct) => void;
	updateProductQuantity: (cartProduct: CartProduct, productCartIndex: number) => void;
	handleAddToCart: (event: React.FormEvent<HTMLFormElement>, productAddedToCart: CartProductProps) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode;
}

export interface CartProductProps extends IDrink {
	quantity: number;
	totalPrice: number;
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

	const findProductIndexInCart = (productBeingAdded: CartProductProps) => {
		return cart.findIndex((product) => product.id === productBeingAdded.id);
	};

	const handleAddToCart = (event: React.FormEvent<HTMLFormElement>, productAddedToCart: CartProductProps) => {
		event.preventDefault();
		const productCartIndex = findProductIndexInCart(productAddedToCart);
		if (productCartIndex >= 0) {
			updateProductQuantity(productAddedToCart, productCartIndex);
			return;
		}
		addProductToCart(productAddedToCart);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addProductToCart,
				updateProductQuantity,
				handleAddToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
