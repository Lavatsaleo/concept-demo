import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColumnChart7 = () => {
	const ageCategories = [
		"0-4 yrs",
		"5-14 yrs",
		"15-34 yrs",
	];
	const options = {
		chart: { type: "bar" },
		title: { text: "COVID-19 positive results by Age,Sex" },
		xAxis: [
			{ categories: ageCategories, title: { text: "" }, reversed: false },
			{
				categories: ageCategories,
				title: { text: "" },
				reversed: false,
				linkedTo: 0,
				opposite: true,
			},
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
		plotOptions: { series: { stacking: "normal" }, bar: { pointWidth: 18 } },
		tooltip: {
		},
		legend: { align: "left", verticalAlign: "top", y: 0, x: 80 },
		series: [
			{ name: "Female", data: [10,46, 40], color: "blue" },
			{ name: "Male", data: [-9, -41, -34], color: "orange" },
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart7;
