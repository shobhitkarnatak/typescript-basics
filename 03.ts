/** @format */

// Set properties as optional || Optional parameters
type Params = {
	first: string;
	last?: string;
};

export const getName = (params: { first: string; last: string }) => {
	if (params.last) {
		return `${params.first} ${params.last}`;
	}
	return params.first;
};
