import { Outlet } from "react-router-dom";
import AppHeader from "components/layout/app.header";
import { useEffect } from "react";
import { fetchAccountAPI } from "services/api";
import { useCurrentApp } from "components/context/app.context";

function Layout() {
	const { setUser } = useCurrentApp();
	useEffect(() => {
		const fetchAccount = async () => {
			const res = await fetchAccountAPI();
			if (res.data) {
				setUser(res.data.user);
			}
		};
		fetchAccount();
	}, [setUser]);

	return (
		<div>
			<AppHeader />
			<Outlet />
		</div>
	);
}

export default Layout;
