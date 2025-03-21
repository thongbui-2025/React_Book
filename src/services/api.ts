import axios from "services/axios.customize";

export const registerAPI = (
	fullName: string,
	email: string,
	password: string,
	phone: string
) => {
	const baseURL = "/api/v1/user/register";
	return axios.post<IBackendRes<IRegister>>(
		baseURL,
		{
			fullName,
			email,
			password,
			phone,
		},
		{
			headers: {
				delay: 1000,
			},
		}
	);
};

export const loginAPI = (username: string, password: string) => {
	const baseURL = "/api/v1/auth/login";
	return axios.post<IBackendRes<ILogin>>(
		baseURL,
		{ username, password },
		{
			headers: {
				delay: 1500,
			},
		}
	);
};

export const fetchAccountAPI = () => {
	const urlbackend = "/api/v1/auth/account";
	return axios.get<IBackendRes<IFetchAccount>>(urlbackend, {
		headers: {
			delay: 1000,
		},
	});
};
