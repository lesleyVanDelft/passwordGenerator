import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Generator.module.scss';
import InputContainer, { RangeContext } from './InputContainer';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { generatePassword } from '../utils/generatePassword';

const Generator = () => {
	const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!');
	const [length, setLength] = useState(0);
	const [checkedInput, setCheckedInput] = useState({
		upper: false,
		lower: false,
		numbers: false,
		symbols: false,
	});
	const [passwordStrength, setPasswordStrength] = useState('');

	// const [upper, setUpper] = useState(false);
	// const [lower, setLower] = useState(false);
	// const [numbers, setNumbers] = useState(false);
	// const [symbols, setSymbols] = useState(false);

	// const handleGenerate = () => {

	// }

	useEffect(() => {
		console.log(checkedInput);
	}, [checkedInput]);

	return (
		<main className={styles.Generator}>
			<h1>Password Generator</h1>
			<div className={styles.Generator__output}>
				<h2>{generatedPassword}</h2>
				<AiOutlineCopy />
			</div>
			<div className={styles.Generator__creation}>
				<div className="flex-container">
					<p>Character length</p> <span>{length}</span>
				</div>

				<InputContainer
					setLength={setLength}
					setCheckedInput={setCheckedInput}
					// setUpper={setUpper}
					// setLower={setLower}
					// setNumbers={setNumbers}
					// setSymbols={setSymbols}
				/>

				<div className={styles.Generator__strength}>
					<span>strength</span>
					<div className={styles.Generator__bars}>
						<h2>{passwordStrength.length > 0 ? passwordStrength : ''}</h2>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
					</div>
				</div>

				<button
					onClick={() => {
						console.log(generatePassword(length));
					}}>
					<p>Generate</p> <BsArrowRightShort />
				</button>
			</div>
		</main>
	);
};

export default Generator;
