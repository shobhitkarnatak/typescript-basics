/** @format */

//Working with obj params

// type AddTwoNumbersArgs = {
// 	first: string;
// 	second: number;
// };

interface AddTwoNumbersArgs {
	first: number;
	second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
	return params.first + params.second;
};
