import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Overview = (props) => {
  return (
		<Card>
			<CardBody className="px-4">
				<CardTitle tag="h6">Overview</CardTitle>
				<CardText className="mt-3">
					This dashboard aims to monitor the evolution of SARS-CoV-2, identify more lethal strains, and track
					the extent of undiagnosed COVID deaths. It provides critical insights to inform public health
					policies and enhance prevention and control measures.
				</CardText>
				{/* <CardTitle tag="h6">Objectives</CardTitle>
				<CardText>
					<ul>
						<li>
							Monitor the evolution of the SARS-COV-2 virus in order to help identify viral strains
							associated with increased mortality.
						</li>
						<li>
							Document the prevalence of missed SARS-COV-2 infection among those that die in hospital with
							flu-like symptoms.
						</li>
					</ul>
				</CardText> */}
			</CardBody>
		</Card>
  );
};

export default Overview;
