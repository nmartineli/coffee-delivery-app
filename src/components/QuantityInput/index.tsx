import { Minus, Plus } from '@phosphor-icons/react';
import { QuantityInputComponent } from './styles';

export function QuantityInput() {
	return (
		<QuantityInputComponent>
			<button>
				<Minus size={14} />
			</button>
			<input type="number" id="productQuantity" placeholder="1" readOnly />
			<button>
				<Plus size={14} />
			</button>
		</QuantityInputComponent>
	);
}
