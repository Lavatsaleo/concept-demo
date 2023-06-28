import { Card, CardBody } from "reactstrap";

const TopCards = (props) => {
  return (
		<Card>
			<CardBody style={{ height: "115px" }}>
				<div className="d-flex">
					<div className=" text-center" style={{ margin: "auto" }}>
						<h3 className="mb-0 font-weight-bold">{props.earning}</h3>
						<small className="text-muted text-center">{props.subtitle}</small>
					</div>
				</div>
			</CardBody>
		</Card>
  );
};

export default TopCards;
