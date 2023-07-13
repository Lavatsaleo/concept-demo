import { TabContent, TabPane, Nav, NavItem, NavLink, Col, Row, Card } from "reactstrap";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataIE from "@highcharts/map-collection/countries/ke/ke-all.geo.json";
import { useState } from "react";
import classnames from "classnames";
import map from "./ke-county.json"

highchartsMap(Highcharts);

const DemoMap = () => {
	// State for current active Tab
	const [currentActiveTab, setCurrentActiveTab] = useState("1");

	// Toggle active state for Tab
	const toggle = (tab) => {
		if (currentActiveTab !== tab) setCurrentActiveTab(tab);
	};
	let data = []
	let result = [
		{
			County: "HOMA BAY",
			no: 127469,
		},
		{
			County: "SIAYA",
			no: 102404,
		},
		{
			County: "NAIROBI",
			no: 159445,
		},
		{
			County: "KISUMU",
			no: 110675,
		},
		{
			County: "NAKURU",
			no: 42958,
		},
		{
			County: "MIGORI",
			no: 68621,
		},
		{
			County: "KIAMBU",
			no: 41884,
		},
		{
			County: "MERU",
			no: 20112,
		},
		{
			County: "TRANS NZOIA",
			no: 16732,
		},
		{
			County: "KWALE",
			no: 12036,
		},
		{
			County: "NAROK",
			no: 10583,
		},
		{
			County: "NYERI",
			no: 18966,
		},
		{
			County: "NANDI",
			no: 11744,
		},
		{
			County: "NYAMIRA",
			no: 11340,
		},
		{
			County: "MURANG'A",
			no: 17234,
		},
		{
			County: "UASIN GISHU",
			no: 29273,
		},
		{
			County: "BOMET",
			no: 9553,
		},
		{
			County: "KAJIADO",
			no: 16074,
		},
		{
			County: "TAITA TAVETA",
			no: 6340,
		},
		{
			County: "EMBU",
			no: 10430,
		},
		{
			County: "KIRINYAGA",
			no: 10909,
		},
		{
			County: "NYANDARUA",
			no: 9857,
		},
		{
			County: "Laikipia",
			no: 9456,
		},
		{
			County: "VIHIGA",
			no: 12424,
		},
		{
			County: "TURKANA",
			no: 4835,
		},
		{
			County: "KERICHO",
			no: 13380,
		},
		{
			County: "BARINGO",
			no: 5540,
		},
		{
			County: "THARAKA-NITHI",
			no: 7070,
		},
		{
			County: "ELGEYO MARAKWET",
			no: 3509,
		},
		{
			County: "WEST POKOT",
			no: 3266,
		},
		{
			County: "SAMBURU",
			no: 1812,
		},
		{
			County: "Tharaka- Nithi",
			no: 74,
		},
		{
			County: "",
			no: 24,
		},
	];
	let mappedCounties = [
		{ id: 38, name: "Vihiga" },
		{ id: 8, name: "Wajir" },
		{ id: 23, name: "Turkana" },
		{ id: 27, name: "Uasin Gishu" },
		{ id: 13, name: "Tharaka-Nithi" },
		{ id: 26, name: "Trans Nzoia" },
		{ id: 7, name: "Garissa" },
		{ id: 43, name: "Homa Bay" },
		{ id: 28, name: "Elgeyo-Marakwet" },
		{ id: 14, name: "Embu" },
		{ id: 39, name: "Bungoma" },
		{ id: 40, name: "Busia" },
		{ id: 30, name: "Baringo" },
		{ id: 36, name: "Bomet" },
		{ id: 20, name: "Kirinyaga" },
		{ id: 45, name: "Kisii" },
		{ id: 22, name: "Kiambu" },
		{ id: 3, name: "Kilifi" },
		{ id: 37, name: "Kakamega" },
		{ id: 35, name: "Kericho" },
		{ id: 11, name: "Isiolo" },
		{ id: 34, name: "Kajiado" },
		{ id: 17, name: "Makueni" },
		{ id: 9, name: "Mandera" },
		{ id: 5, name: "Lamu" },
		{ id: 16, name: "Machakos" },
		{ id: 2, name: "Kwale" },
		{ id: 31, name: "Laikipia" },
		{ id: 42, name: "Kisumu" },
		{ id: 15, name: "Kitui" },
		{ id: 32, name: "Nakuru" },
		{ id: 29, name: "Nandi" },
		{ id: 21, name: "Murang'a" },
		{ id: 47, name: "Nairobi" },
		{ id: 44, name: "Migori" },
		{ id: 1, name: "Mombasa" },
		{ id: 10, name: "Marsabit" },
		{ id: 12, name: "Meru" },
		{ id: 6, name: "Taita Taveta" },
		{ id: 4, name: "Tana River" },
		{ id: 25, name: "Samburu" },
		{ id: 41, name: "Siaya" },
		{ id: 18, name: "Nyandarua" },
		{ id: 19, name: "Nyeri" },
		{ id: 33, name: "Narok" },
		{ id: 46, name: "Nyamira" },
		{ id: 24, name: "West Pokot" },
	];
	for (let i = 0; i < result.length; i++) {
		let resultCounty = result[i].County;
		resultCounty = resultCounty ? resultCounty.toLowerCase() : "";
		resultCounty = resultCounty.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[]\\\/]/gi, "");
		resultCounty = resultCounty.replace(" ", "");
		for (let j = 0; j < mappedCounties.length; j++) {
			let mappedCounty = mappedCounties[j].name;
			mappedCounty = mappedCounty.toLowerCase();
			mappedCounty = mappedCounty.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[]\\\/]/gi, "");
			mappedCounty = mappedCounty.replace(" ", "");
			if (mappedCounty === resultCounty) {
				data.push({
					id: mappedCounties[j].id,
					value: result[i].no === null ? 0 : result[i].no,
				});
				continue;
			}
		}
	}
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
	const mapOptions2 = {
		chart: { map:  map},
		title: { text: "" },
		colors: ["#F5542D", "#F17B25", "#F7DB00", "#8CC63F", "#009245"],
		colorAxis: {
			dataClassColor: "category",
			dataClasses: [
				{ to: 400 },
				{ from: 5000, to: 10000 },
				{ from: 10000, to: 20000 },
				{ from: 20000, to: 50000 },
				{ from: 50000 },
			],
		},
		tooltip: {
			formatter: function () {
				return this.series.name + "<br>" + this.point.properties.NAME_1 + ": <b>" + this.point.value + "</b>";
			},
		},
		mapNavigation: {
			enabled: true,
			enableMouseWheelZoom: true,
			enableButtons: false,
			buttonOptions: {
				verticalAlign: "bottom",
			},
		},
		legend: {
			title: { text: "" },
			layout: "vertical",
			align: "right",
			verticalAlign: "bottom",
			valueDecimals: 0,
			backgroundColor: "white",
			floating: true,
		},
		series: [{ name: "", data: data, joinBy: ["CC_1", "id"], states: { hover: { color: "#000000" } } }],
	};
	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "1",
						})}
						onClick={() => {
							toggle("1");
						}}
					>
						Sites
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: currentActiveTab === "2",
						})}
						onClick={() => {
							toggle("2");
						}}
					>
						Cases
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={currentActiveTab}>
				<TabPane tabId="1">
					<HighchartsReact constructorType={"mapChart"} highcharts={Highcharts} options={mapOptions} />
				</TabPane>
				<TabPane tabId="2">
					<br />
					<HighchartsReact constructorType={"mapChart"} highcharts={Highcharts} options={mapOptions2} />
				</TabPane>
			</TabContent>
			<br />
			<h2 className="text-center">Mortality surveillance will be conducted at 10 facilities across Kenya</h2>
		</div>
	);
};
export default DemoMap;
