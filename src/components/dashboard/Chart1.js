import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart1 = () => {
	const options = {
		chart: {
			type: "column",
		},
		title: {
			text: "Enrollment Cascade",
		},
		xAxis: {
			categories: ["Screened", "Eligible", "Enrolled", "Sample collected", "COVID-19 Postive"], // Replace with your categories
		},
		yAxis: {
			title: {
				text: "Value",
			},
		},
		series: [
			{
				name: "Series 1",
				data: [60, 55, 20, 20, 15],
				color: "orange",
			},
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart1;
