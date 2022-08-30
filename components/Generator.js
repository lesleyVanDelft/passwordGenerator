import { useState, useContext, useEffect } from 'react';
import styles from '../styles/Generator.module.scss';
import InputContainer, { RangeContext } from './InputContainer';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { generatePassword } from '../utils/generatePassword';
import { toast } from 'react-toastify';
import { passwordStrength } from 'check-password-strength';

const Generator = () => {
	const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!');
	const [length, setLength] = useState(0);
	const [checkedInput, setCheckedInput] = useState({
		upper: false,
		lower: false,
		numbers: false,
		symbols: false,
	});
	const [strength, setStrength] = useState('');

	useEffect(() => {
		setStrength(passwordStrength(generatedPassword).value);
	}, [generatedPassword]);

	return (
		<main className={styles.Generator}>
			<h1>Password Generator</h1>
			<div className={styles.Generator__output}>
				<h2>{generatedPassword}</h2>
				<AiOutlineCopy
					onClick={() => {
						navigator.clipboard.writeText(generatedPassword);
						toast('Password Copied!', {
							position: toast.POSITION.TOP_CENTER,
						});
					}}
				/>
			</div>
			<div className={styles.Generator__creation}>
				<div className="flex-container">
					<p>Character length</p> <span>{length}</span>
				</div>

				<InputContainer
					setLength={setLength}
					setCheckedInput={setCheckedInput}
				/>

				<div className={styles.Generator__strength}>
					<span>strength</span>
					<div className={styles.Generator__bars}>
						<h2>{strength.length > 0 ? strength : ''}</h2>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
						<span className={styles.Generator__bars__bar}></span>
					</div>
				</div>

				<button
					onClick={() => {
						setGeneratedPassword(
							generatePassword(
								length,
								checkedInput.upper,
								checkedInput.lower,
								checkedInput.numbers,
								checkedInput.symbols
							)
						);
					}}>
					<p>Generate</p> <BsArrowRightShort />
				</button>
			</div>
		</main>
	);
};

export default Generator;
