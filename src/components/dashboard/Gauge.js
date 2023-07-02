import { Card, CardBody } from "reactstrap";
import Chart from "react-apexcharts";

const Gauge = (props) => {
	const options = {
		series: [76],
		chart: {
			type: "radialBar",
			offsetY: -20,
			sparkline: {
				enabled: true,
			},
		},
		// colors: ["red"],
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: "22px",
					},
				},
			},
		},
		grid: {
			padding: {
				top: -10,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				shadeIntensity: 0.4,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 53, 91],
			},
		},
		labels: [""],
	};
	let series = [parseInt((props.value1 * 100) / props.value2)];
	return (
		<Card class='card-1'>
			<CardBody >
				<div className="">
					<Chart options={options} series={series} type="radialBar" height={"200px"} style={{marginBottom: "0px"}} />
				</div>
			</CardBody>
			<small className="text-center">{props.subtitle}</small>
		</Card>
	);
};

export default Gauge;
