/** @format */

// Typings error in Try-Catch

const tryCatchDemo = (state: 'fail' | 'succeed') => {
	try {
		if (state === 'fail') {
			throw new Error('Failure!');
		}
	} catch (e: any) {
		// if (e instanceof Error) {
		// 	return e.message;
		// }
		// return e.message;

		return (e as Error).message;
	}
};

tryCatchDemo('fail');
