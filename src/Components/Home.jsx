import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import imgSlider from "./images";
function Imgslider() {
    return (
        <div>
            <Carousel id="carousel">
                {
                    imgSlider.map((img, id) => {
                        return (
                            <Carousel.Item key={id} >
                                <img src={img.images}  className="d.block" width="100%" height="100%" alt="slide-img" />
                            </Carousel.Item>
                        )

                    })
                }
            </Carousel>


            {/* <Carousel.Item>
                    <img className="d-block w-100 h-100vh" src={require('../image/abc.jpg')} alt="First image"
                    />
                    <Carousel.Caption>
                        <h1>First image</h1>
                        <p>fhkwrfbgejcnwckre</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-90" src={require('../image/ram.jpg')} alt="First image"
                    />
                    <Carousel.Caption>
                        <h1>Second image</h1>
                        <p>fhkwrfbgejcnwckre</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-100vh" src={require('../image/bbc.jpg')} alt="First image"
                    />
                    <Carousel.Caption>
                        <h1>Third image</h1>
                        <p>fhkwrfbgejcnwckre</p>
                    </Carousel.Caption>
                </Carousel.Item> */}

        </div>
    )
}
export default Imgslider


