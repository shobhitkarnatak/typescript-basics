/** @format */

//Constraining value types & Union

interface User {
	id: number;
	firstName: string;
	lastName: string;
	role: 'admin' | 'user' | superAdmin;
}

type superAdmin = 'super-admin';

export const defaultUser: User = {
	id: 1,
	firstName: 's',
	lastName: 'k',
	role: 'admin',
	// role:"superadmin" Wrong
};
