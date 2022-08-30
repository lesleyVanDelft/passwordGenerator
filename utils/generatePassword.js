export const generatePassword = (length, upper, lower, numbers, symbols) => {
	let result = '';
	let maxLength = length;

	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={[}];.,';
	const lettersUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lettersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
	const joinedLetters = lettersLowerCase + lettersUpperCase;
	const numberStr = '0123456789';
	const symbolsStr = '!@#$%^&*()_-+={[}];.,';
	const lowerNumberSymbols = lettersLowerCase + numberStr + symbolsStr;
	const upperNumberSymbols = lettersUpperCase + numberStr + symbolsStr;
	const lowerNumbers = lettersLowerCase + numberStr;
	const upperNumbers = lettersUpperCase + numberStr;
	const lowerSymbols = lettersLowerCase + symbolsStr;
	const upperSymbols = lettersUpperCase + symbolsStr;
	const letterSymbols = joinedLetters + symbolsStr;
	const letterNumbers = joinedLetters + symbolsStr;
	const numberSymbols = numberStr + symbolsStr;

	if (length <= 0) {
		return (result = 'Needs moar.');
	} else if (upper && lower && numbers && symbols) {
		// ALL CHECKED
		console.log('All checked');
		for (let i = 0; i < characters.length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (upper && lower && numbers && !symbols) {
		// UPPER, LOWER, NUMBERS ONLY
		console.log('upper, lower, numbers only');
		const noSymbols = lettersUpperCase + lettersLowerCase + numberStr;

		for (let i = 0; i < noSymbols.length; i++) {
			result += noSymbols.charAt(Math.floor(Math.random() * noSymbols.length));
		}

		return result.slice(0, maxLength);
	} else if (upper && lower && !numbers && symbols) {
		// UPPER, LOWER, SYMBOLS
		console.log('upper, lower, symbols only');
		for (let i = 0; i < letterSymbols.length; i++) {
			result += letterSymbols.charAt(
				Math.floor(Math.random() * letterSymbols.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (upper && lower && !numbers && !symbols) {
		// UPPER AND LOWER ONLY
		console.log('upper and lower is true, numbers and symbols is false');
		for (let i = 0; i < joinedLetters.length; i++) {
			result += joinedLetters.charAt(
				Math.floor(Math.random() * joinedLetters.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (upper && !lower && !numbers && !symbols) {
		// ONLY UPPERCASE
		console.log('only uppercase');
		for (let i = 0; i < lettersUpperCase.length; i++) {
			result += lettersUpperCase.charAt(
				Math.floor(Math.random() * lettersUpperCase.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && lower && !numbers && !symbols) {
		// ONLY LOWERCASE
		console.log('only lowercase');
		for (let i = 0; i < lettersLowerCase.length; i++) {
			result += lettersLowerCase.charAt(
				Math.floor(Math.random() * lettersLowerCase.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && !lower && numbers && symbols) {
		// ONLY NUMBERS AND SYMBOLS
		console.log('numbers and symbols');
		const noLetters = numberStr + symbolsStr;
		for (let i = 0; i < noLetters.length; i++) {
			result += noLetters.charAt(Math.floor(Math.random() * noLetters.length));
		}
		return result.slice(0, maxLength);
	} else if (!upper && !lower && !numbers && symbols) {
		// ONLY SYMBOLS
		console.log('only symbols');
		for (let i = 0; i < symbolsStr.length; i++) {
			result += symbolsStr.charAt(
				Math.floor(Math.random() * symbolsStr.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && !lower && numbers && !symbols) {
		// ONLY NUMBERS
		console.log('only numbers');
		for (let i = 0; i < numberStr.length; i++) {
			result += numberStr.charAt(Math.floor(Math.random() * numberStr.length));
		}
		return result.slice(0, maxLength);
	} else if (upper && !lower && numbers && !symbols) {
		// UPPER AND NUMBERS
		console.log('only upper and numbers');
		for (let i = 0; i < upperNumbers.length; i++) {
			result += upperNumbers.charAt(
				Math.floor(Math.random() * upperNumbers.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (upper && !lower && !numbers && symbols) {
		// UPPER AND SYMBOLS
		console.log('only upper and symbols');
		for (let i = 0; i < upperSymbols.length; i++) {
			result += upperSymbols.charAt(
				Math.floor(Math.random() * upperSymbols.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && lower && numbers && !symbols) {
		// LOWER AND NUMBERS
		console.log('only lower and numbers');
		for (let i = 0; i < lowerNumbers.length; i++) {
			result += lowerNumbers.charAt(
				Math.floor(Math.random() * lowerNumbers.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && lower && !numbers && symbols) {
		// LOWER AND SYMBOLS
		console.log('only lower and symbols');
		for (let i = 0; i < lowerSymbols.length; i++) {
			result += lowerSymbols.charAt(
				Math.floor(Math.random() * lowerSymbols.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (!upper && lower && numbers && symbols) {
		// LOWER AND NUMBERS AND SYMBOLS
		console.log('only lower and numbers and symbols');
		for (let i = 0; i < lowerNumberSymbols.length; i++) {
			result += lowerNumberSymbols.charAt(
				Math.floor(Math.random() * lowerNumberSymbols.length)
			);
		}
		return result.slice(0, maxLength);
	} else if (upper && !lower && numbers && symbols) {
		// UPPER AND NUMBERS AND SYMBOLS
		console.log('only upper and numbers and symbols');
		for (let i = 0; i < upperNumberSymbols.length; i++) {
			result += upperNumberSymbols.charAt(
				Math.floor(Math.random() * upperNumberSymbols.length)
			);
		}
		return result.slice(0, maxLength);
	} else {
		for (let i = 0; i < characters.length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result.slice(0, length);
	}
};
