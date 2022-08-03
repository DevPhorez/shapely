import './Projects.css'

import { useState } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

function Projects () {

	const [projects] = useState([
		{ id: 1, title: 'Project-1' },
		{ id: 2, title: 'Project-2' },
		{ id: 3, title: 'Project-3' },
		{ id: 4, title: 'Project-4' },
		{ id: 5, title: 'Project-5' },
		{ id: 6, title: 'Project-6' },
		{ id: 7, title: 'Project-7' },
		{ id: 8, title: 'Project-8' },
		{ id: 9, title: 'Project-9' },
		{ id: 10, title: 'Project-10' },
	])

	return (
		<Container fluid className="bg-dark" style={ { paddingTop: '6rem', paddingBottom: '5rem' } } >
			<h3 className="text-center text-white mb-4" >Our Latest Projects</h3>
			<p className="text-center text-white mb-4" >Here is our latest projects. You'll love them!</p>
			<Row className="d-flex justify-content-evenly">
				{
					projects.map(project => (
						<Col lg={3} md={6}>
							<div className="project-card">
								<Image fluid src={`Images/project-${project.id}.jpg`} />
								<div className="d-flex justify-content-center">
									<h4 className="project-title position-absolute text-white" >{project.title}</h4>
								</div>
							</div>
						</Col>
					))
				}
			</Row>
		</Container>
	)
}

export default Projects