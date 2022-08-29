import { useState, useEffect } from 'react';
import { RangeProvider } from './LengthContext';
import styles from '../styles/InputContainer.module.scss';

const InputContainer = ({ setLength }) => {
	const [rangeValue, setRangeValue] = useState(0);
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		setLength(rangeValue);
	}, [rangeValue, setLength]);

	return (
		<RangeProvider value={rangeValue}>
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
					className={styles.InputContainer__containerLabel}
					onClick={prevState => setChecked(!prevState)}>
					<input type="checkbox" id="uppercase" />
					<span className={styles.InputContainer__checkmark}></span>
					Include uppercase letters
				</label>

				<label
					htmlFor="lowercase"
					className={styles.InputContainer__containerLabel}
					onClick={prevState => setChecked(!prevState)}>
					<input type="checkbox" id="lowercase" />
					<span className={styles.InputContainer__checkmark}></span>
					Include lowercase letters
				</label>

				<label
					htmlFor="numbers"
					className={styles.InputContainer__containerLabel}
					onClick={prevState => setChecked(!prevState)}>
					<input type="checkbox" id="numbers" />
					<span className={styles.InputContainer__checkmark}></span>
					Include numbers
				</label>

				<label
					htmlFor="symbols"
					className={styles.InputContainer__containerLabel}
					onClick={prevState => setChecked(!prevState)}>
					<input type="checkbox" id="symbols" />
					<span className={styles.InputContainer__checkmark}></span>
					Include symbols
				</label>
			</div>
		</RangeProvider>
	);
};

export default InputContainer;
