import { createContext, ReactNode, useReducer, useState } from 'react';
import { CartProduct, cartReducer } from '../reducers/cart/reducers';
import { addToCart, removeFromCart, updateCart } from '../reducers/cart/actions';
import { IDrink } from '../hooks/useFetchProducts';
import { getAddress } from '../services/getCep';
import { useNavigate } from 'react-router-dom';

interface CartContextType {
	cart: CartProduct[];
	addressAPI: IAddressAPI;
	addressError: boolean;
	paymentError: boolean;
	cartError: boolean;
	order: IOrder | undefined;
	addProductToCart: (cartProduct: CartProduct) => void;
	updateProductQuantity: (cartProduct: CartProduct, productCartIndex: number) => void;
	handleAddToCart: (event: React.FormEvent<HTMLFormElement>, productAddedToCart: CartProductProps) => void;
	handleGetAddress: (cep: string) => void;
	handleRemoveFromCart: (event: React.FormEvent<HTMLFormElement>, productToRemove: CartProductProps) => void;
	setPayment: (payment: string) => void;
	setAddress: (address: IAddress) => void;
	getOrder: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
	children: ReactNode;
}

export interface CartProductProps extends IDrink {
	quantity: number;
	totalPrice: number;
}

interface IAddressAPI {
	bairro: string;
	cep: string;
	ddd: string;
	gia: string;
	ibge: string;
	localidade: string;
	logradouro: string;
	siafi: string;
	uf: string;
}

interface IAddress extends IAddressAPI {
	complemento: string;
	numero: string;
}

export interface IOrder {
	address: IAddress;
	payment: string;
	cart: CartProduct[];
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const navigate = useNavigate();
	const [cartState, dispatch] = useReducer(cartReducer, {
		cart: [],
	});
	const [paymentError, setPaymentError] = useState(false);
	const [cartError, setCartError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	const [addressAPI, setAddressAPI] = useState<IAddressAPI>({
		bairro: '',
		cep: '',
		ddd: '',
		gia: '',
		ibge: '',
		localidade: '',
		logradouro: '',
		siafi: '',
		uf: '',
	});

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
		numero: '',
	});

	const [order, setOrder] = useState<IOrder>({
		address: {
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
			numero: '',
		},
		cart: [],
		payment: '',
	});
	const [payment, setPayment] = useState('');

	const { cart } = cartState;

	async function handleGetAddress(cep: string) {
		setAddressError(false);
		setAddressAPI({
			bairro: '',
			cep: '',
			ddd: '',
			gia: '',
			ibge: '',
			localidade: '',
			logradouro: '',
			siafi: '',
			uf: '',
		});

		const addressReturn = await getAddress(cep);
		if (addressReturn === undefined || addressReturn.erro) {
			setAddressError(true);
			return;
		}
		setAddressAPI(addressReturn);
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

	const removeProductFromCart = (productCartIndex: number) => {
		dispatch(removeFromCart(productCartIndex));
	};

	const handleRemoveFromCart = (event: React.FormEvent<HTMLFormElement>, productToRemove: CartProductProps) => {
		event.preventDefault();
		const productCartIndex = findProductIndexInCart(productToRemove);
		removeProductFromCart(productCartIndex);
	};

	const checkOrderForErrors = () => {
		if (addressAPI.cep === '' || addressError) {
			setAddressError(true);
		}

		if (cart.length === 0) {
			setCartError(true);
		}

		if (!payment) {
			setPaymentError(true);
		}
	};

	const getOrder = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		checkOrderForErrors();

		if (addressError || cartError || paymentError) {
			console.log('Erros');
			return;
		} else {
			const order = {
				address,
				cart,
				payment,
			};

			setOrder(order);

			navigate('/success');
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addProductToCart,
				updateProductQuantity,
				handleAddToCart,
				handleGetAddress,
				handleRemoveFromCart,
				setAddress,
				addressAPI,
				addressError,
				setPayment,
				paymentError,
				getOrder,
				cartError,
				order,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
