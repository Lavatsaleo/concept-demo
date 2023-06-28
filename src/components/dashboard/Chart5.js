import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart5 = () => {
	const ageCategories = [
		"Kapenguria CRH",
		"Nakuru Level 6",
		"Loitokitok SCRH",
		"Makueni CRH",
		"Makueni CRH",
	];
	const options = {
		chart: { type: "bar" },
		title: { text: "Number enrolled and tested COVID-19 Positive" },
		xAxis: [
			{ categories: ageCategories, title: { text: "" }, reversed: false },
		],
		yAxis: [
			{
				labels: {
					formatter: function () {
						return Math.abs(this.value);
					},
				},
			},
		],
		plotOptions: { bar: { pointWidth: 18 } },
		tooltip: {},
		legend: { align: "left", verticalAlign: "top", y: 0, x: 80 },
		series: [
			{ name: "COVID-19 Positive", data: [9, 41, 10, 11, 12].reverse(), color: "orange" },
			{ name: "No. Enrolled", data: [62, 60, 30, 27, 20].reverse(), color: "purple" },
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart5;
