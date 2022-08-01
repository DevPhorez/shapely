import Nav from "react-bootstrap/Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import "./NavBarSearch.css"

function NavBarSearch () {
	return (
		<Nav.Link className="ms-2 ms-md-1 ms-lg-4 text-purple fs-7 fw-bolder" href="#"><FontAwesomeIcon icon={ faMagnifyingGlass } /></Nav.Link>
	)
}

export default NavBarSearch;