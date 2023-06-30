import { Minus, Plus } from '@phosphor-icons/react';
import { QuantityInputComponent } from './styles';

interface QuantityInputProps {
	number: number;
	setNumber: (number: number) => void;
}

export function QuantityInput({ number, setNumber }: QuantityInputProps) {
	const incrementNumber = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const quantity = number++;
		setNumber(quantity);
	};

	const decrementNumber = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		if (number > 1) {
			const quantity = number--;
			setNumber(quantity);
		}
	};

	return (
		<QuantityInputComponent>
			<button onClick={decrementNumber}>
				<Minus size={14} />
			</button>
			<input type="number" id="productQuantity" value={number} readOnly />
			<button onClick={incrementNumber}>
				<Plus size={14} />
			</button>
		</QuantityInputComponent>
	);
}
