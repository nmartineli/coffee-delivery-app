import { CartProduct } from './reducers';

export enum ActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
}

export function addToCart(product: CartProduct) {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: {
			product,
		},
	};
}
