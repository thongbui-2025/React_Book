export {};
declare global {
	interface IBackendRes<T> {
		error?: string | string[];
		message: string;
		statusCode: number | string;
		data?: T;
	}
	interface IModelPaginate<T> {
		meta: {
			current: number;
			pageSize: number;
			pages: number;
			total: number;
		};
		results: T[];
	}

	interface IRegister {
		_id: string;
		email: string;
		fullName: string;
	}

	interface ILogin {
		access_token: string;
		user: {
			email: string;
			phone: string;
			fullName: string;
			role: string;
			avatar: string;
			id: string;
		};
	}

	interface IUser {
		email: string;
		fullName: string;
		phone: string;
		role: string;
		avatar: string;
		id: string;
	}

	interface IFetchAccount {
		user: IUser;
	}
}
