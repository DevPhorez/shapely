import './CustomerComment.css'

import { useState } from "react";

import {Container, Col, Carousel, Image} from 'react-bootstrap';

function CustomerComment () {

	const [customers] = useState([
		{
			id: 1,
			fullName: 'John Doe',
			description: 'ipsam libero molestias omnis praesentium quo, rem similique sint tempora vel voluptatem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis dignissimos dolore, eum facilis  Aliquam expedita odio quae.',
			image: 'mike-muller.jpg'
		},
		{
			id: 2,
			fullName: 'Aigars Silkalns',
			description: 'Cumque debitis dignissimos dolore, eum facilis  Aliquam expedita odio quae praesentium quo, rem similique sint tempora ipsam libero molestias omnis  sit amet, consectetur adipisicing elit vel voluptatem.Lorem ipsum dolor.',
			image: 'Aigars-Silkalns.jpg'
		},
	])

	return (
		<div className="bg-image position-relative">
			<Container>
				<h3 className="text-center text-white mb-5 pt-5-ph">What Our Customer Say</h3>
				<Carousel indicators={false} fade={true}>
					{
						customers.map(customer => (
							<Carousel.Item className="d-flex justify-content-center" interval={5000}>
								<Col lg={6}>
									<p className="text-center text-white">
										{customer.description}
									</p>
									<div className="d-flex justify-content-center">
										<Image className="customer-image" src={`Images/${customer.image}`} />
									</div>
									<h4 className="text-center text-white mt-3">{customer.fullName}</h4>
								</Col>
							</Carousel.Item>
						))
					}
				</Carousel>
			</ Container>
		</div>
	);
}

export default CustomerComment;