import './SEOFriendly.css'
import '../Home/Home.css'

import { Container, Row, Col, Image, Button } from "react-bootstrap";

function SEOFriendly () {
	return (
		<Container className="mt-5-ph mb-5-ph">
			<Row className="d-flex justify-content-between">
				<Col sm={12} md={6} lg={7}>
					<Image fluid src="Images/macbook-preview-flexible.png"></Image>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<h3 className="fs-3 mb-4 text-center text-md-start" style={ { marginTop: '4rem' } } >SEO Friendly</h3>
					<p className="description text-black-50">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut beatae consequatur eius
						excepturi maxime repellat velit voluptatibus! Beatae eius et illum, itaque modi odit omnis optio
						quaerat repudiandae totam.velit voluptatibus! Beatae eius et illum, itaque modi odit omnis optio
						quaerat repudiandae totam.
					</p>
					<div className="d-flex justify-content-center">
						<Button className="btn-purple border-0 rounded-0 bg-purple fw-bold mt-3 me-3 px-5 py-3" >READ MORE</Button>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default SEOFriendly