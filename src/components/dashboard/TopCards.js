import { Card, CardBody } from "reactstrap";
import "./card.css";

const TopCards = (props) => {
  return (
		<div class="card-1">
			<div class="title">
				<p class="title-text">{props.subtitle}</p>
			</div>
			<div class="data">
				<p>{props.earning.toLocaleString()}</p>
			</div>
		</div>
  );
};

export default TopCards;
