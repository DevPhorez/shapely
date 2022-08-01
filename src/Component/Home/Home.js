import './Home.css'

import { Container, Row, Col, Button } from 'react-bootstrap'

function Home () {
	return (
		<Container fluid className="background-image w-100" id="home">
			<h1 className="text-white text-center display-4">We Change Everything <br/> WordPress</h1>
			<p className="text-white text-center" style={ { margin: '2.1rem 0 1.9rem' } } >This is the only WordPress theme you will ever want to use.</p>
			<div className="d-flex justify-content-center" >
				<Button className="btn-purple border-0 rounded-0 bg-purple fw-bold me-3 px-5 py-3" >READ MORE</Button>
				<Button variant="outline-light" className="rounded-0 fw-bold px-5 py-3">DOWNLOAD NOW</Button>
			</div>
		</Container>
	)
}

export default Home