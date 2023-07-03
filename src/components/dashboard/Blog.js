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
					Mortality surveillance offers a unique opportunity to characterize the extent of undiagnosed SARS
					COV-2 infections as well as to ensure the identification of more lethal strains of the virus to
					better inform public health prevention and control policy.
				</CardText>
				<CardTitle tag="h6">Objectives</CardTitle>
				<CardText>
					<ul>
						<li>Monitor the evolution of the SARS-COV-2 virus in order to help identify viral strains 
              associated with increased mortality.</li>
            <li>Document the prevalence of missed SARS-COV-2 infection among those that die in hospital 
              with flu-like symptoms.</li>
					</ul>
				</CardText>
			</CardBody>
		</Card>
  );
};

export default Overview;
