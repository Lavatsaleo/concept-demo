import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
	const options = {
		chart: {
			type: "pie",
		},
		title: {
			text: "Enrollment By Sex",
		},
		colors: [
			"orange", // Color for Category 2
			"blue", // Color for Category 3
		],
		series: [
			{
				name: "Data",
				data: [
					["Male", 20],
					["Female", 30],
				], // Replace with your data values
			},
		],
	};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default PieChart;
