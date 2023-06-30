import { produce } from 'immer';
import { IDrink } from '../../hooks/useFetchProducts';
import { ActionTypes } from './actions';

export interface CartProduct extends IDrink {
	quantity: number;
}

export interface CartState {
	cart: CartProduct[];
}

export function cartReducer(state: CartState, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			return produce(state, (draft) => {
				draft.cart.push(action.payload.newCycle);
			});
		default:
			return state;
	}
}
