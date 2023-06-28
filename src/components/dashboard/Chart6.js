import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart2 = () => {
	const options = {
		chart: {
			type: "pie",
		},
		plotOptions: {
			pie: {
				innerSize: "50%", // Adjust the innerSize to control the size of the inner hole (donut hole)
				depth: 45, // Adjust the depth to control the thickness of the donut
				dataLabels: {
					enabled: false, // Disable data labels inside the donut segments
				},
			},
		},
		title: {
			text: "COVID-19 Positivity",
		},
		colors: [
			"#FF0000",
			"green", 
		],
		series: [
			{
				name: "Data",
				data: [
					["Posivite", 20],
					["Negative", 30],
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

export default PieChart2;
