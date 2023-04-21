/** @format */

/* Assigning dynamic keys to an array
Record type: is a type available in TypeScript that can ensure consistency in 
implementing a dictionary (key-value pairs) */

interface Blah {
	[id: string]: string;
}

const createCache = () => {
	// const cache: Record<string, string> = {};

	// const cache: {
	// 	[index: string]: string;
	// } = {};

	const cache: Blah = {};

	const add = (id: string, value: string) => {
		cache[id] = value;
		// cache[1] = value;
	};
	const remove = (id: string) => {
		delete cache[id];
	};
	return {
		cache,
		add,
		remove,
	};
};

const cache = createCache();
cache.add('123', 'shobhit');

// cache.cache[id]; Error
