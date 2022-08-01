import '../SEO Friendly/SEOFriendly.css'
import '../Home/Home.css'

import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Portfolio () {
	return (
		<Container fluid className="bg-light" style={ { paddingTop: '5rem', paddingBottom: '5rem' } }>
			<Container>
				<Row className="d-flex justify-content-between">
					<Col className="order-1" sm={12} md={6} lg={7}>
							<Image fluid src="Images/flexible-portfolio.png"></Image>
					</Col>
					<Col sm={12} md={6} lg={4}>
						<h3 className="fs-3 mb-4 text-center text-md-start" style={ { marginTop: '4rem' } } >Portfolio Section</h3>
						<p className="description text-black-50">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut beatae consequatur eius
							excepturi maxime repellat velit voluptatibus! Beatae eius et illum, itaque modi odit omnis optio
							quaerat repudiandae totam.
						</p>
						<div className="d-flex justify-content-center">
							<Button className="btn-purple border-0 rounded-0 bg-purple fw-bold mt-3 me-3 px-5 py-3" >SEE IT IN ACTION</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Portfolio