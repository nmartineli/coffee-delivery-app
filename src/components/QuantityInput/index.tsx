import { QuantityInputComponent } from './styles';

export function QuantityInput() {
	return (
		<QuantityInputComponent>
			<button>-</button>
			<input type="number" id="productQuantity" placeholder="1" readOnly />
			<button>+</button>
		</QuantityInputComponent>
	);
}
