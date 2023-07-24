import { TabContent, TabPane, Nav, NavItem, NavLink, Col, Row, Card } from "reactstrap";
import TopCards from "../components/dashboard/TopCards";
import Gauge from "../components/dashboard/Gauge";
import classnames from "classnames";
import { useState } from "react";
import DemoMap from "../components/dashboard/Map";
import ColumnChart1 from './../components/dashboard/Chart1';
import ColumnChart2 from './../components/dashboard/Chart2';
import ColumnChart4 from './../components/dashboard/Chart4';
import PieChart from './../components/dashboard/Chart3';
import ColumnChart5 from './../components/dashboard/Chart5';
import PieChart2 from './../components/dashboard/Chart6';
import ColumnChart7 from './../components/dashboard/Chart7';
import Filter from "../components/dashboard/Filters";
import DateFilter from "../components/dashboard/DateFilter";
import Overview from "../components/dashboard/Blog";
import Chart8 from "../components/dashboard/Chart8";

const Starter = () => {
	// State for current active Tab
	const [currentActiveTab, setCurrentActiveTab] = useState("1");

	// Toggle active state for Tab
	const toggle = (tab) => {
		if (currentActiveTab !== tab) setCurrentActiveTab(tab);
	};
	return (
		<div>
			{currentActiveTab === "1"?<></> :<Row>
				<Col md={2} xl={2}>
					<Filter
						data={[
							{ value: "facility A", label: "facility A" },
							{ value: "facility B", label: "facility B" },
							{ value: "facility C", label: "facility C" },
						]}
						holder={"facilities"}
					/>
				</Col>
				<Col md={2} xl={2}>
					<Filter
						data={[
							{ value: "county A", label: "county A" },
							{ value: "county B", label: "county B" },
							{ value: "county C", label: "county C" },
						]}
						holder={"counties"}
					/>
				</Col>
				<Col md={2} xl={2}>
					<Filter
						data={[
							{ value: "male", label: "male" },
							{ value: "female", label: "female" },
						]}
						holder={"gender"}
					/>
				</Col>
				<Col md={2} xl={2}>
					<Filter
						data={[
							{ value: "0-4 yrs", label: "0-4 yrs" },
							{ value: "5-9 yrs", label: "5-9 yrs" },
							{ value: "15-34 yrs", label: "15-34 yrs" },
							{ value: "35-55 yrs", label: "35-55 yrs" },
						]}
						holder={"age group"}
					/>
				</Col>
				<Col md={4} xl={4}>
					<DateFilter />
				</Col>
			</Row>}
			<Row>
							<Col xs="4" sm="2" md="2">
							<Nav tabs vertical>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "1",
						})}
						onClick={() => {
							toggle("1");
						}}
					>
						Overview
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "2",
						})}
						onClick={() => {
							toggle("2");
						}}
					>
						Screening
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "3",
						})}
						onClick={() => {
							toggle("3");
						}}
					>
						Enrollments
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "4",
						})}
						onClick={() => {
							toggle("4");
						}}
					>
						Covid19 Results
					</NavLink>
				</NavItem>
			</Nav>
							</Col>
							<Col xs="8" sm="10" md="10">
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					{/***Top Cards***/}
					<div className="my-3">
						<Overview />
						<h6 className="mb-3 font-weight-bold">Overall COVID-19 Positivity</h6>
						<Row>
							<Col sm="6" lg="3">
								<PieChart2 h={"200px"} />
							</Col>
							<Col sm="6" lg="3">
								<TopCards subtitle="Total Screened" earning={114002} footer={100002} />
							</Col>
							<Col sm="6" lg="3">
								<TopCards subtitle="Eligible Participants" earning={20340} footer={19002} />
							</Col>
							<Col sm="6" lg="3">
								<TopCards subtitle="Enrolled & Tested" earning={20340} footer={11902} />
							</Col>
							{/* <Col sm="6" lg="3">
								<Gauge value1={20340} value2={114002} subtitle="Enrolled & Tested" />
							</Col> */}
						</Row>
						<Row>
							<Col>
							<Chart8/>
							</Col>
							<Col>
							<ColumnChart4/>
							</Col>
						</Row>
						{/* <h3 className="mb-0 font-weight-bold text-center">Enrollment</h3> */}
						{/* <Row>
							<Col sm="6" lg="4">
								<TopCards subtitle="Eligible" earning={20340} />
							</Col>
							<Col sm="6" lg="4">
								<TopCards subtitle="Enrolled" earning={15340} />
							</Col>
							<Col sm="6" lg="4">
								<Gauge value1={15340} value2={20340} subtitle="Enrolled" />
							</Col>
						</Row>
						<h3 className="mb-0 font-weight-bold text-center">Sample Collection</h3>
						<Row>
							<Col sm="6" lg="4">
								<TopCards subtitle="Eligible For Sampling" earning={15340} />
							</Col>
							<Col sm="6" lg="4">
								<TopCards subtitle="Sampled" earning={9440} />
							</Col>
							<Col sm="6" lg="4">
								<Gauge value1={9440} value2={15340} subtitle="Sampled" />
							</Col>
						</Row> */}
					</div>
				</TabPane>
				<TabPane className="my-3" tabId="2">
					<Row>
						<Col sm="6">
							<Card variant="outlined">
								<DemoMap />
							</Card>
						</Col>
						<Col sm="6">
							<Card variant="outlined">
								<ColumnChart1 />
							</Card>
						</Col>
					</Row>
				</TabPane>
				<TabPane className="my-3" tabId="3">
					<Row>
						<Col sm="4">
							<Card variant="outlined">
								<ColumnChart2 />
							</Card>
						</Col>
						<Col sm="4">
							<Card variant="outlined">
								<PieChart />
							</Card>
						</Col>
						<Col sm="4">
							<Card variant="outlined">
								<ColumnChart4 />
							</Card>
						</Col>
					</Row>
				</TabPane>
				<TabPane className="my-3" tabId="4">
					<Row>
						<Col sm="4">
							<Card variant="outlined">
								<ColumnChart5 />
							</Card>
						</Col>
						<Col sm="4">
							<Card variant="outlined">
								<PieChart2 />
							</Card>
						</Col>
						<Col sm="4">
							<Card variant="outlined">
								<ColumnChart7 />
							</Card>
						</Col>
					</Row>
				</TabPane>
			</TabContent>
						</Col>
						</Row>
		</div>
	);
};

export default Starter;
