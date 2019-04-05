import React, { Component } from 'react'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
export default class Home extends Component {
    render() {
        return (
            <MDBContainer>
               <br/>
                <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                                <MDBView>
                                <img className="d-block w-100" src="img/img4.jpg" alt="First slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Tea House</h3>
                                <p>They Are New Every Morning: Great is Thy Faithfulness</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100" src="img/front2.jpg" alt="Second slide" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Tea Time</h3>
                                <p>Keep Calm And Have a Cup Of Tea</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100" src="img/test1.jpg" alt="Third slide" />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Tea Lovers</h3>
                                <p>A Cupof Tea Is Like A Hug</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="4">
                            <MDBView>
                                <img className="d-block w-100" src="img/img3.jpg" alt="Mattonit's item" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">Earlene Grey</h3>
                                <p>Tea is to the Body as Music is to the Soul</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <h2>....You can't buy Happiness, but you can buy TEA and that's kind of the same Thing</h2>
            </MDBContainer>
        )
    }
}
