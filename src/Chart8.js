import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

// Initialize the highcharts-more module
HighchartsMore(Highcharts);

const ColumnChart8 = () => {
	const options = {};

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export default ColumnChart8;
