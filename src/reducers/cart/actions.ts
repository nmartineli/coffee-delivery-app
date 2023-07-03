import { CartProduct } from './reducers';

export enum ActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	UPDATE_CART = 'UPDATE_CART',
}

export function addToCart(product: CartProduct) {
	return {
		type: ActionTypes.ADD_TO_CART,
		payload: {
			product,
		},
	};
}

export function updateCart(product: CartProduct, productCartIndex: number) {
	return {
		type: ActionTypes.UPDATE_CART,
		payload: {
			product,
			productCartIndex,
		},
	};
}
