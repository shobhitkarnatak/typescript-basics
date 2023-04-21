/** @format */
// Selectively construct types from other types $ TypeScript utility types: Pick and Omit

interface User {
	id: string;
	firstName: string;
	lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<User, 'id' | 'firstName'>;
// type MyType = Pick<User, 'id' | 'firstName'>;

// type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
