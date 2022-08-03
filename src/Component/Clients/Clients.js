import { useState } from "react";

import { Container, Image } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "./Clients.css";


function Clients () {

	const [sliderItems] = useState([
		{ id: 1, image: 'colorlib.png', link: 'https://colorlib.com' },
		{ id: 2, image: 'js.png', link: 'https://js.com' },
		{ id: 3, image: 'html.png', link: 'https://html.com' },
		{ id: 4, image: 'css.png', link: 'https://css.com' },
		{ id: 5, image: 'less.png', link: 'https://less.com' },
		{ id: 6, image: 'sass.png', link: 'https://sass.com' },
		{ id: 7, image: 'bootstrap.jpg', link: 'https://getbootstrap.com' },
		{ id: 8, image: 'adobe.png', link: 'https://adobe.com' },
		{ id: 8, image: 'facebook.png', link: 'https://facebook.com' },
	])

	return (
		<>
			<Container className="mt-5 mb-5 pt-5 pb-5">
				<h3 className="text-center mb-5">Our Main Clients</h3>
				<Swiper
					loop={true}
					slidesPerView={4}
					spaceBetween={30}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={ [Autoplay] }
					className="mySwiper"
				>
					{
						sliderItems.map(item => (
							<SwiperSlide>
								<a href={item.link}>
									<Image fluid className="slider-image" src={`Images/${item.image}`} />
								</a>
							</SwiperSlide>
						))
					}
				</Swiper>
			</Container>
		</>
	);
}

export default Clients