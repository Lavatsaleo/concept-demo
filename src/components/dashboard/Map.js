import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/ke/ke-all.geo.json";

highchartsMap(Highcharts);

const DemoMap = () =>{
	const mapOptions = {
		chart: {
			map: "countries/ke/ke-all",
		},
		title: {
			text: "Participating Health facilities",
		},
		credits: {
			enabled: false,
		},
		mapNavigation: {
			enabled: true,
		},
		tooltip: {
			headerFormat: "",
			pointFormat: "<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>name: {point.name}",
		},
		series: [
			{
				// Use the gb-all map with no data as a basemap
				name: "Basemap",
				mapData: mapDataIE,
				borderColor: "#A0A0A0",
				nullColor: "rgba(200, 200, 200, 0.3)",
				showInLegend: false,
			},
			{
				// Specify points using lat/lon
				type: "mappoint",
				name: "Cities",
				color: "#4169E1",
				data: [
					{
						name: "Marsabit County",
						x: 50,
						y: 5000,
					},
					{
						name: "Kapenguria County Referral Hospital",
						x: 4500,
						y: 7500,
					},
					{
						name: "Busia County Referral Hospital",
						x: 3400,
						y: 6500,
					},
					{
						name: "Mama Lucy Kibaki Hospital",
						x: 3400,
						y: 5000,
					},
					{
						name: "Kenyatta National Hospital",
						x: 4400,
						y: 3000,
					},
					{
						name: "Makueni County Referral Hospital",
						x: 2400,
						y: 3000,
					},
				],
				cursor: "pointer",
				point: {
					events: {
						click: function () {
							console.log(this.keyword);
						},
					},
				},
				marker: {
					symbol: "url(http://c.tadst.com/gfx/n/icon/icon-map-pin.png)",
				},
			},
		],
	};
return (
	<div>
		<HighchartsReact constructorType={"mapChart"} highcharts={Highcharts} options={mapOptions} />
		<h2>Description goes here</h2>
	</div>
);
}
export default DemoMap;