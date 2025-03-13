import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout";
import About from "pages/client/about";
import Book from "pages/client/book";
import "styles/global.scss";
import Register from "pages/client/auth/register";
import Login from "pages/client/auth/login";
import { App } from "antd";
import { AppProvider } from "components/context/app.context";
import HomePage from "pages/client/homepage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/book",
				element: <Book />,
			},
		],
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App>
			<AppProvider>
				<RouterProvider router={router} />
			</AppProvider>
		</App>
	</StrictMode>
);
