import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
/*****Routes******/

const ThemeRoutes = [
	{
		path: "/",
		element: <FullLayout />,
		children: [
			// { path: "/", element: <Navigate /> },
			{ path: "/", exact: true, element: <About /> },
			{ path: "/sari", exact: true, element: <About /> },
			{ path: "/afi", exact: true, element: <About /> },
			{ path: "/mortality-dash", exact: true, element: <Starter /> },
			{ path: "/page3", exact: true, element: <Alerts /> },
		],
	},
];

export default ThemeRoutes;
