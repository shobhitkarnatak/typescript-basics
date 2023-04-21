/**
 * How do we type onFocusChange?
 *
 * @format
 */

// Typing functions

type FocusListner = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListner) => {
	window.addEventListener('focus', () => {
		onFocusChange(true);
	});

	window.addEventListener('blur', () => {
		onFocusChange(false);
	});
};

addListener((isFocused) => {
	console.log({ isFocused });
});
