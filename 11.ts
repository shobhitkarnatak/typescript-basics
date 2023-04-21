/** @format */

// Narrowing down union types

const coreceAmount = (amount: number | { amount: number }) => {
	//Error  if (amount.amount) {
	// 	return amount.amount;
	// }

	if (typeof amount === 'object') {
		return amount.amount;
	}
	return amount;
};

coreceAmount(20);
coreceAmount({ amount: 20 });
