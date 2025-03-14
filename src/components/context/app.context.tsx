import { createContext, useContext, useState } from "react";

interface IAppContext {
	isAuthenticated: boolean;
	setIsAuthenticated(value: boolean): void;
	user: IUser | null;
	setUser(value: IUser | null): void;
	isAppLoading: boolean;
	setIsAppLoading(value: boolean): void;
}

const CurrentAppContext = createContext<IAppContext | null>(null);

type TProps = {
	children: React.ReactNode;
};

export const AppProvider = (props: TProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);
	const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

	return (
		<CurrentAppContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				user,
				setUser,
				isAppLoading,
				setIsAppLoading,
			}}
		>
			{props.children}
		</CurrentAppContext.Provider>
	);
};

export const useCurrentApp = () => {
	const currentAppContext = useContext(CurrentAppContext);

	if (!currentAppContext) {
		throw new Error(
			"useCurrentApp has to be used within <CurrentAppContext.Provider>"
		);
	}

	return currentAppContext;
};
