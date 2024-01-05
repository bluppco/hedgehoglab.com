// IMPORT REACT RESPONSIVE CAROUSEL LIBRARY
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORT JSX LAYOUTS
import ContainerJSX from "../../layouts/Container"

// IMPORT JSX ATOMS
import H1JSX from "../../atoms/jsx/H1"

const Hero = ( props ) => {

	const { data } = props

	return(
		<Carousel showThumbs={ false } showStatus={ false } showArrows={ false } autoPlay={ true } infiniteLoop={ true }>
			<section className="bg-zinc-600 h-screen">
				{

					data.slice(1).map( ( item, index ) => {

						return(
							<div key={ "hero-slider-image-" + index } className="relative w-full">
								<div className="w-full h-screen max-h-screen object-cover overflow-hidden">
									<img
										src={ item }
										alt=""
										className="w-full h-full"
									/>
								</div>
								<ContainerJSX>
									<div className="absolute top-0 flex items-center h-full w-full">
										<div className="space-y-10 w-[40%]">
											<H1JSX>We’re a human-centred global tech consultancy.</H1JSX>
											<p className="text-xl text-white font-montserrat font-extrabold">
												Constantly in pursuit of human progress through technology.
											</p>
											<button className="text-white font-bold py-2 px-4 rounded border">
												Let's chat
											</button>
										</div>
									</div>
								</ContainerJSX>
							</div>
						)

					})

				}
			</section>
		</Carousel>
	)

}

export default Hero
