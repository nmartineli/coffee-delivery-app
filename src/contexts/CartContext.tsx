import { createContext, ReactNode, useReducer, useState } from 'react';
import { CartProduct, cartReducer } from '../reducers/cart/reducers';
import { addToCart, updateCart } from '../reducers/cart/actions';
import { IDrink } from '../hooks/useFetchProducts';
import { getAddress } from '../services/getCep';

interface CartContextType {
	cart: CartProduct[];
	address: IAddress;
	addressError: boolean;
	addProductToCart: (cartProduct: CartProduct) => void;
	updateProductQuantity: (cartProduct: CartProduct, productCartIndex: number) => void;
	handleAddToCart: (event: React.FormEvent<HTMLFormElement>, productAddedToCart: CartProductProps) => void;
	handleGetAddress: (cep: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode;
}

export interface CartProductProps extends IDrink {
	quantity: number;
	totalPrice: number;
}

interface IAddress {
	bairro: string;
	cep: string;
	complemento: string;
	ddd: string;
	gia: string;
	ibge: string;
	localidade: string;
	logradouro: string;
	siafi: string;
	uf: string;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartState, dispatch] = useReducer(cartReducer, {
		cart: [],
	});
	const [addressError, setAddressError] = useState(false);
	const [address, setAddress] = useState<IAddress>({
		bairro: '',
		cep: '',
		complemento: '',
		ddd: '',
		gia: '',
		ibge: '',
		localidade: '',
		logradouro: '',
		siafi: '',
		uf: '',
	});

	const { cart } = cartState;

	async function handleGetAddress(cep: string) {
		setAddressError(false);
		setAddress({
			bairro: '',
			cep: '',
			complemento: '',
			ddd: '',
			gia: '',
			ibge: '',
			localidade: '',
			logradouro: '',
			siafi: '',
			uf: '',
		});

		const address = await getAddress(cep);
		if (address === undefined || address.erro) {
			setAddressError(true);
			return;
		}
		setAddress(address);
	}

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
				handleGetAddress,
				address,
				addressError,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
