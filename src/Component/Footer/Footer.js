import './Footer.css'
import {Container, Nav} from "react-bootstrap";

import { RiFacebookFill, RiTwitterFill } from "react-icons/ri"
import { FaLinkedinIn } from "react-icons/fa"
import { TbBrandYoutube } from "react-icons/tb"
import { BsInstagram } from "react-icons/bs"

function Footer () {
	return (
		<div className="bg-200 bg-black">
			<Container className="d-flex justify-content-between align-items-center h-100">
				<h5 className="text-white">Theme by Phorez Powered by React</h5>
				<Nav className="text-white">
					<Nav.Link className="rotate-hover text-white fs-4 pe-1" ><RiFacebookFill /></Nav.Link>
					<Nav.Link className="rotate-hover text-white fs-4 pe-1" ><RiTwitterFill /></Nav.Link>
					<Nav.Link className="rotate-hover text-white fs-4 pe-1" ><FaLinkedinIn /></Nav.Link>
					<Nav.Link className="rotate-hover text-white fs-4 pe-1" ><TbBrandYoutube /></Nav.Link>
					<Nav.Link className="rotate-hover text-white fs-4 pe-1" ><BsInstagram /></Nav.Link>
				</Nav>
			</Container>
		</div>
	)
}

export default Footer