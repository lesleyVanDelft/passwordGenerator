import { useState, useEffect } from 'react';
import { RangeProvider } from './LengthContext';
import styles from '../styles/InputContainer.module.scss';

const InputContainer = ({
	setLength,
	setCheckedInput,
	// setUpper,
	// setLower,
	// setNumbers,
	// setSymbols,
}) => {
	const [rangeValue, setRangeValue] = useState(0);
	const [checked, setChecked] = useState(['']);
	const [upper, setUpper] = useState(false);
	const [lower, setLower] = useState(false);
	const [numbers, setNumbers] = useState(false);
	const [symbols, setSymbols] = useState(false);

	useEffect(() => {
		setLength(rangeValue);
	}, [rangeValue, setLength]);

	// const handleSelect = e => {};

	useEffect(() => {
		setCheckedInput({
			upper: upper,
			lower: lower,
			numbers: numbers,
			symbols: symbols,
		});
	}, [lower, numbers, setCheckedInput, symbols, upper]);

	return (
		<div className={`${styles.InputContainer} input-container`}>
			<input
				type="range"
				min="0"
				max="20"
				value={rangeValue}
				onChange={e => setRangeValue(e.target.value)}
			/>
			<label
				htmlFor="uppercase"
				className={styles.InputContainer__containerLabel}>
				<input
					type="checkbox"
					id="uppercase"
					onClick={() => setUpper(!upper)}
				/>
				<span className={styles.InputContainer__checkmark}></span>
				Include uppercase letters
			</label>

			<label
				htmlFor="lowercase"
				className={styles.InputContainer__containerLabel}
				// onClick={prevState => setLower(!prevState)}
			>
				<input
					type="checkbox"
					id="lowercase"
					onClick={() => setLower(!lower)}
				/>
				<span className={styles.InputContainer__checkmark}></span>
				Include lowercase letters
			</label>

			<label
				htmlFor="numbers"
				className={styles.InputContainer__containerLabel}
				// onClick={()=> setChecked(!)}
			>
				<input
					type="checkbox"
					id="numbers"
					onClick={() => setNumbers(!numbers)}
				/>
				<span className={styles.InputContainer__checkmark}></span>
				Include numbers
			</label>

			<label
				htmlFor="symbols"
				className={styles.InputContainer__containerLabel}
				// onClick={prevState => setChecked(!prevState)}
			>
				<input
					type="checkbox"
					id="symbols"
					onClick={() => setSymbols(!symbols)}
				/>
				<span className={styles.InputContainer__checkmark}></span>
				Include symbols
			</label>
		</div>
	);
};

export default InputContainer;
