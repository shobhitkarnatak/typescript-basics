/** @format */

// Working with arrays

interface User {
	id: number;
	firstName: string;
	lastName: string;
	role: 'admin' | 'user' | superAdmin;
	posts: Post[]; //Array<Post>
}

interface Post {
	id: number;
	title: string;
}

type superAdmin = 'super-admin';

export const defaultUser: User = {
	id: 1,
	firstName: 's',
	lastName: 'k',
	role: 'admin',
	// role:"superadmin" Wrong
	posts: [
		{
			id: 1,
			title: 'Hello',
		},
	],
};
