export const generatePassword = (length, upper, lower, numbers, symbols) => {
	let result = '';
	const maxLength = 20;
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={[}];.,';
	const lettersUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lettersLowerCase = 'abcdefghijklmnopqrstuvwxyz';
	const numberStr = '0123456789';
	const symbolsStr = '!@#$%^&*()_-+={[}];.,';

	if (length <= 0) {
		return (result = 'Needs moar.');
	} else {
		for (let i = 0; i < characters.length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result.slice(0, maxLength);
	}
};
