import React from "react";
import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart8 = () => {
	var data = [
		{ category: "06-12 May", columnValue: 10, lineValue: 5 },
		{ category: "13-19 May", columnValue: 15, lineValue: 7 },
		{ category: "20-26 May", columnValue: 8, lineValue: 4 },
		{ category: "27-02 June", columnValue: 12, lineValue: 6 },
		{ category: "03-09 June", columnValue: 20, lineValue: 15 },
	];
	const options = {
		chart: {
			type: "column",
		},
		title: {
			text: "COVID-19 Positivity over time",
		},
		xAxis: {
			title: "Epi-Week",
			categories: data.map((item) => item.category),
		},
		yAxis: [
			{
				title: {
					text: "Number Tested",
				},
			},
			{
				title: {
					text: "% Tested Positive ",
				},
				opposite: true,
			},
		],
		series: [
			{
				name: "Number Tested",
				data: data.map((item) => item.columnValue),
				yAxis: 0, // Column series should use the first yAxis
			},
			{
				name: "% Tested Positive",
				type: "line",
				data: data.map((item) => item.lineValue),
				yAxis: 1, // Line series should use the second yAxis
				color: "red",
			},
		],
	};

	return (
		<div>
			<HighchartsReact height={""} highcharts={Highcharts} options={options} />
		</div>
	);
};

export default Chart8;
