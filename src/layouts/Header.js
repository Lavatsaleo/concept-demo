import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	Collapse,
	Nav,
	NavItem,
	NavbarBrand,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Dropdown,
	Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";
import logo from "../assets/images/logos/logo.png";

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [dropdownOpen, setDropdownOpen] = React.useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);
	const Handletoggle = () => {
		setIsOpen(!isOpen);
	};
	const showMobilemenu = () => {
		document.getElementById("sidebarArea").classList.toggle("showSidebar");
	};
	return (
		<Navbar color="primary" dark expand="md">
			<Collapse navbar isOpen={isOpen}>
				<Nav className="me-auto" navbar>
					<NavItem>
						<Link to="/" className="nav-link">
							<img src={logo} height={"35px"} />
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/mortality-dash" className="nav-link">
							Mortality Dashboards
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/afi" className="nav-link">
							AFI Dashboards
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/sari" className="nav-link">
							SARI/ILI Dashboards
						</Link>
					</NavItem>
					{/* <UncontrolledDropdown inNavbar nav>
						<DropdownToggle caret nav>
							DD Menu
						</DropdownToggle>
						<DropdownMenu end>
							<DropdownItem>Option 1</DropdownItem>
							<DropdownItem>Option 2</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Reset</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown> */}
				</Nav>
				{/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
					<DropdownToggle color="primary">
						<img src={user1} alt="profile" className="rounded-circle" width="30"></img>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem header>Info</DropdownItem>
						<DropdownItem>My Account</DropdownItem>
						<DropdownItem>Edit Profile</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Logout</DropdownItem>
					</DropdownMenu>
				</Dropdown> */}
			</Collapse>
		</Navbar>
	);
};

export default Header;
