/** @format */

// Function return type annotations

interface User {
	id: number;
	firstName: string;
	lastName: string;
	role: 'admin' | 'user' | 'super-admin';
	posts: Array<Post>;
}

interface Post {
	id: number;
	title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User => {
	return {
		id: 1,
		firstName: 'shobhit',
		lastName: 'k',
		role: 'admin',
		posts: [
			{
				id: 1,
				title: 'okay',
			},
		],
	};
};

const user = makeUser();
console.log(user.id, user.firstName, user.lastName, user.posts[0]);
