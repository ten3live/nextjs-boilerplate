'use client'


import React, { useState,useEffect } from 'react';

import * as MD from 'mdb-react-ui-kit';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
		setIsClient(true)

	  }, [])


  
  return (<>
    {isClient &&<div className='container'>
          <MD.MDBCarousel showControls showIndicators>
      <MD.MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        <MD.MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MD.MDBCarouselCaption>
      </MD.MDBCarouselItem>
      <MD.MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

        <MD.MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MD.MDBCarouselCaption>
      </MD.MDBCarouselItem>
      <MD.MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <MD.MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MD.MDBCarouselCaption>
      </MD.MDBCarouselItem>
    </MD.MDBCarousel>
    </div>}
    </>
  );
}