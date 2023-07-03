import { Minus, Plus } from '@phosphor-icons/react';
import { QuantityInputComponent } from './styles';

interface QuantityInputProps {
	number: number;
	setNumber: (number: number) => void;
}

export function QuantityInput({ number, setNumber }: QuantityInputProps) {
	const incrementNumber = () => {
		setNumber(number + 1);
	};

	const decrementNumber = () => {
		if (number > 1) {
			setNumber(number - 1);
		}
	};

	return (
		<QuantityInputComponent>
			<button type="button" onClick={decrementNumber}>
				<Minus size={14} />
			</button>
			<input type="number" id="productQuantity" value={number} readOnly />
			<button type="button" onClick={incrementNumber}>
				<Plus size={14} />
			</button>
		</QuantityInputComponent>
	);
}
