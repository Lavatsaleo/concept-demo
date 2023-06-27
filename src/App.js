import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import DemoMap from "./Map";
import ColumnChart1 from "./Chart1";
import { Grid } from "@mui/material";
import ColumnChart2 from "./Chart2";
import PieChart from "./Chart3";
import ColumnChart4 from "./Chart4";
import PieChart2 from "./Chart6";
import ColumnChart5 from "./Chart5";
import ColumnChart7 from "./Chart7";
import ResponsiveAppBar from "./components/Navbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import ColumnChart8 from "./Chart8";

export default function App() {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div sx={{ margin: "2px" }}>
			<ResponsiveAppBar />

			<Grid container spacing={2}>
				<Grid item xs={4}>
					
				</Grid>
				<Grid item xs={4}>
					
				</Grid>
				<Grid item xs={4}>
					<Card variant="outlined">
						{/* <ColumnChart8 /> */}
					</Card>
				</Grid>
			</Grid>

			<TabContext value={value}>
				<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Dash One" value="1" />
						<Tab label="Dash Two" value="2" />
						<Tab label="Dash Three" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<h2>Mortality Dashboards</h2>
					<Grid container spacing={2} sx={{ my: 2 }}>
						<Grid item xs={5}>
							<Card variant="outlined">
								<DemoMap />
							</Card>
						</Grid>
						<Grid item xs={2}>
							<Typography variant="h3">Decription goes here</Typography>
						</Grid>
						<Grid item xs={5}>
							<Card variant="outlined">
								<ColumnChart1 />
							</Card>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value="2">
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Card variant="outlined">
								<ColumnChart2 />
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card variant="outlined">
								<PieChart />
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card variant="outlined">
								<ColumnChart4 />
							</Card>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value="3">
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Card variant="outlined">
								<ColumnChart5 />
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card variant="outlined">
								<PieChart2 />
							</Card>
						</Grid>
						<Grid item xs={4}>
							<Card variant="outlined">
								<ColumnChart7 />
							</Card>
						</Grid>
					</Grid>
				</TabPanel>
			</TabContext>

			{/*
			 */}
		</div>
	);
}
