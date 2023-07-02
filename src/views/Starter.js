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

const Starter = () => {
	// State for current active Tab
	const [currentActiveTab, setCurrentActiveTab] = useState("1");

	// Toggle active state for Tab
	const toggle = (tab) => {
		if (currentActiveTab !== tab) setCurrentActiveTab(tab);
	};
	return (
		<div>
			<Row>
				<Col sm="6" lg="4">
					<Filter
						data={[
							{ value: "facility A", label: "facility A" },
							{ value: "facility B", label: "facility B" },
							{ value: "facility C", label: "facility C" },
						]}
						holder={'facilities'}
					/>
				</Col>
				<Col sm="6" lg="4">
					<Filter
						data={[
							{ value: "county A", label: "county A" },
							{ value: "county B", label: "county B" },
							{ value: "county C", label: "county C" },
						]}
						holder={'counties'}
					/>
				</Col>
				<Col sm="6" lg="4">
					<DateFilter />
				</Col>
			</Row>
			<Nav tabs>
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
						Participants
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
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					{/***Top Cards***/}
					<div>
						<h3 className="mb-0 font-weight-bold text-center">Screening</h3>
						<Row>
							<Col sm="6" lg="4">
								<TopCards subtitle="Screened" earning={114002} />
							</Col>
							<Col sm="6" lg="4">
								<TopCards subtitle="Eligible" earning={20340} />
							</Col>
							<Col sm="6" lg="4">
								<Gauge value1={20340} value2={114002} subtitle="Eligible" />
							</Col>
						</Row>
						<h3 className="mb-0 font-weight-bold text-center">Enrollment</h3>
						<Row>
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
						</Row>
					</div>
				</TabPane>
				<TabPane tabId="2">
					<h3 className="mb-0 font-weight-bold text-center">Mortality Dashboards</h3>
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
				<TabPane tabId="3">
					<h3 className="mb-0 font-weight-bold text-center">Participants Characteristics</h3>
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
				<TabPane tabId="4">
					<h3 className="mb-0 font-weight-bold text-center">COVID-19 Results</h3>
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
		</div>
	);
};

export default Starter;
