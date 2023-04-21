/** @format */

// Assigning types to variables
interface User {
	id: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
export const defaultUser: User = {
	id: 1,
	firstName: 'Shobhit',
	lastName: 'K',
	isAdmin: true,
};

const getUserId = (user: User) => {
	return user.id;
};
