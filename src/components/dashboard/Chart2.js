import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart2 = () => {
	const options = {
		chart: {
			type: "bar",
		},
		title: {
			text: "Enrollment By Health Facility",
		},
		xAxis: {
			categories: ["Screened", "Eligible", "Enrolled", "Sample collected", "COVID-19 Postive"],
		},
		yAxis: {
			title: {
				text: "",
			},
		},
		series: [
			{
				name: "Series 1",
				data: [10, 20, 30, 40, 50].reverse(),
				color: "purple",
			},
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart2;
