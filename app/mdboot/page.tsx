'use client'
import React, { ChangeEvent, useState,useEffect } from 'react';

import * as MD from 'mdb-react-ui-kit';

export default function App() {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  const [toggleTwoModal, setToggleTwoModal] = useState(false);
  const [scrollableModal, setScrollableModal] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [varyingState, setVaryingState] = useState('');
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');
  const [popoverModal, setPopoverModal] = useState(false);

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen2 = () => setTopRightModal(!topRightModal);

  useEffect(() => {
		setIsClient(true)
	  }, [])
  const toggleOpen = () => setPopoverModal(!popoverModal);
  const onChangeRecipient = (event: ChangeEvent<HTMLInputElement>) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setVaryingMessage(event.target.value);
  };


  const toggleFirst = () => setShowFirst(!showFirst);
  const toggleSecond = () => setShowSecond(!showSecond);

  const toggleBoth = () => {
    setShowFirst(!showFirst);
    setShowSecond(!showSecond);
  };


  
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
      <div className="position-static">A</div>
      <div className="position-relative">B</div>
      <div className="position-absolute">C</div>
 <div className="fixed-bottom">D</div>
      <div className="position-absolute">E</div>
       <div className="sticky-top">Stick to the top on viewports sized SM (small) or wider</div>

      <div className="position-fixed">F</div>
      <div className="position-sticky">G</div>

      
      <MD.MDBTable align='middle' responsive>
      <MD.MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MD.MDBTableHead>
      <MD.MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MD.MDBBadge color='success' pill>
              Active
            </MD.MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MD.MDBBtn color='link' rounded size='sm'>
              Edit
            </MD.MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MD.MDBBadge color='primary' pill>
              Onboarding
            </MD.MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MD.MDBBtn color='link' rounded size='sm'>
              Edit
            </MD.MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MD.MDBBadge color='warning' pill>
              Awaiting
            </MD.MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MD.MDBBtn color='link' rounded size='sm'>
              Edit
            </MD.MDBBtn>
          </td>
        </tr>
      </MD.MDBTableBody>
    </MD.MDBTable>


      
      <MD.MDBBtn
        onClick={() => {
          setVaryingState('@mdo');
          setVaryingModal(!varyingModal);
          setVaryingRecipient('@mdo');
        }}
      >
        Open modal for @mdo
      </MD.MDBBtn>
      <MD.MDBBtn
        onClick={() => {
          setVaryingState('@fat');
          setVaryingModal(!varyingModal);
          setVaryingRecipient('@fat');
        }}
      >
        Open modal for @fat
      </MD.MDBBtn>
      <MD.MDBBtn
        onClick={() => {
          setVaryingState('@getbootstrap');
          setVaryingModal(!varyingModal);
          setVaryingRecipient('@getbootstrap');
        }}
      >
        Open modal for @getbootstrap
      </MD.MDBBtn>

      <MD.MDBModal open={varyingModal} setOpen={setVaryingModal} tabIndex='-1'>
        <MD.MDBModalDialog>
          <MD.MDBModalContent>
            <MD.MDBModalHeader>
              <MD.MDBModalTitle>New message to {varyingState}</MD.MDBModalTitle>
              <MD.MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MD.MDBBtn>
            </MD.MDBModalHeader>
            <MD.MDBModalBody>
              <form>
                <div className='mb-3'>
                  {varyingModal && (
                    <MD.MDBInput
                      value={varyingRecipient}
                      onChange={onChangeRecipient}
                      labelClass='col-form-label'
                      label='Recipient:'
                    />
                  )}
                </div>
                <div className='mb-3'>
                  {varyingModal && (
                    <MD.MDBTextArea
                      value={varyingMessage}
                      onChange={onChangeMessage}
                      labelClass='col-form-label'
                      label='Message:'
                    />
                  )}
                </div>
              </form>
            </MD.MDBModalBody>
            <MD.MDBModalFooter>
              <MD.MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                Close
              </MD.MDBBtn>
              <MD.MDBBtn>Save changes</MD.MDBBtn>
            </MD.MDBModalFooter>
          </MD.MDBModalContent>
        </MD.MDBModalDialog>
      </MD.MDBModal>
    
      <MD.MDBBtn onClick={() => setToggleOneModal(!toggleOneModal)}>OPEN FIRST MODAL</MD.MDBBtn>

      <MD.MDBModal open={toggleOneModal} setOpen={setToggleOneModal} tabIndex='-1'>
        <MD.MDBModalDialog centered>
          <MD.MDBModalContent>
            <MD.MDBModalHeader>
              <MD.MDBModalTitle>Modal 1</MD.MDBModalTitle>
              <MD.MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleOneModal(!toggleOneModal)}
              ></MD.MDBBtn>
            </MD.MDBModalHeader>
            <MD.MDBModalBody>Show a second modal and hide this one with the button below.</MD.MDBModalBody>
            <MD.MDBModalFooter>
              <MD.MDBBtn
                onClick={() => {
                  setToggleOneModal(!toggleOneModal);
                  setTimeout(() => {
                    setToggleTwoModal(!toggleTwoModal);
                  }, 400);
                }}
              >
                Open second modal
              </MD.MDBBtn>
            </MD.MDBModalFooter>
          </MD.MDBModalContent>
        </MD.MDBModalDialog>
      </MD.MDBModal>

      <MD.MDBModal open={toggleTwoModal} setOpen={setToggleTwoModal} tabIndex='-1'>
        <MD.MDBModalDialog centered>
          <MD.MDBModalContent>
            <MD.MDBModalHeader>
              <MD.MDBModalTitle>Modal 2</MD.MDBModalTitle>
              <MD.MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleTwoModal(!toggleTwoModal)}
              ></MD.MDBBtn>
            </MD.MDBModalHeader>
            <MD.MDBModalBody>Close this modal and show the first with the button below.</MD.MDBModalBody>
            <MD.MDBModalFooter>
              <MD.MDBBtn
                onClick={() => {
                  setToggleTwoModal(!toggleTwoModal);
                  setTimeout(() => {
                    setToggleOneModal(!toggleOneModal);
                  }, 400);
                }}
              >
                Back to first
              </MD.MDBBtn>
            </MD.MDBModalFooter>
          </MD.MDBModalContent>
        </MD.MDBModalDialog>
      </MD.MDBModal>
 
 
 
 

      <MD.MDBDropdown>
        <MD.MDBDropdownToggle>Dropdown</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown>
        <MD.MDBDropdownToggle>Right-aligned menu</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu responsive='end'>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown>
        <MD.MDBDropdownToggle>Left-aligned, right-aligned lg</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu responsive='lg-end'>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown>
        <MD.MDBDropdownToggle>Right-aligned, left-aligned lg</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu className='dropdown-menu-end' responsive='lg-start'>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown dropleft>
        <MD.MDBDropdownToggle>Dropstart</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown dropright>
        <MD.MDBDropdownToggle>Dropend</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown dropup>
        <MD.MDBDropdownToggle>Dropup</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Menu item</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <p className='placeholder-glow'>
      <span className='placeholder col-12'></span>
    </p>

    <p className='placeholder-wave'>
      <span className='placeholder col-12'></span>
    </p>
    <div>
      <h1>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h1>
      <h2>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h2>
      <h3>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h3>
      <h4>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h4>
      <h5>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h5>
      <h6>
        Example heading
        <MD.MDBBadge className='ms-2'>NEW</MD.MDBBadge>
      </h6>
    </div>
    <MD.MDBCard alignment='center'>
      <MD.MDBCardHeader>Featured</MD.MDBCardHeader>
      <MD.MDBCardBody>
        <MD.MDBCardTitle>Special title treatment</MD.MDBCardTitle>
        <MD.MDBCardText>With supporting text below as a natural lead-in to additional content.</MD.MDBCardText>
        <MD.MDBBtn href='#'>Button</MD.MDBBtn>
      </MD.MDBCardBody>
      <MD.MDBCardFooter className='text-muted'>2 days ago</MD.MDBCardFooter>
    </MD.MDBCard>

    <MD.MDBCard>
      <MD.MDBCardBody>
        <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
        <MD.MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MD.MDBCardText>
        <MD.MDBBtn>Button</MD.MDBBtn>
      </MD.MDBCardBody>
    </MD.MDBCard>

 
    <MD.MDBCard background='dark' className='text-white'>
      <MD.MDBCardImage overlay src='https://mdbootstrap.com/img/new/slides/017.webp' alt='...' />
      <MD.MDBCardOverlay>
        <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
        <MD.MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MD.MDBCardText>
        <MD.MDBCardText>Last updated 3 mins ago</MD.MDBCardText>
      </MD.MDBCardOverlay>
    </MD.MDBCard>

    <MD.MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MD.MDBCol>
        <MD.MDBCard>
          <MD.MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MD.MDBCardBody>
            <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
            <MD.MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MD.MDBCardText>
          </MD.MDBCardBody>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol>
        <MD.MDBCard>
          <MD.MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MD.MDBCardBody>
            <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
            <MD.MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MD.MDBCardText>
          </MD.MDBCardBody>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol>
        <MD.MDBCard>
          <MD.MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MD.MDBCardBody>
            <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
            <MD.MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MD.MDBCardText>
          </MD.MDBCardBody>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol>
        <MD.MDBCard>
          <MD.MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MD.MDBCardBody>
            <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
            <MD.MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MD.MDBCardText>
          </MD.MDBCardBody>
        </MD.MDBCard>
      </MD.MDBCol>
    </MD.MDBRow>


    <MD.MDBCard>
      <MD.MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MD.MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MD.MDBRipple>
      <MD.MDBCardBody>
        <MD.MDBCardTitle>Card title</MD.MDBCardTitle>
        <MD.MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MD.MDBCardText>
        <MD.MDBBtn href='#'>Button</MD.MDBBtn>
      </MD.MDBCardBody>
    </MD.MDBCard>
<div>
<MD.MDBBtn onClick={toggleFirst}> Toggle first element</MD.MDBBtn>
      <MD.MDBBtn onClick={toggleSecond}>Toggle second element</MD.MDBBtn>
      <MD.MDBBtn onClick={toggleBoth}> Toggle both elements</MD.MDBBtn>

      <MD.MDBRow>
        <MD.MDBCol>
          <MD.MDBCollapse open={showFirst} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MD.MDBCollapse>
        </MD.MDBCol>
        <MD.MDBCol>
          <MD.MDBCollapse open={showSecond} className='mt-3'>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
            anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </MD.MDBCollapse>
        </MD.MDBCol>
      </MD.MDBRow>

</div>

<MD.MDBDropdown>
      <MD.MDBDropdownToggle>Dropdown button</MD.MDBDropdownToggle>
      <MD.MDBDropdownMenu style={{ width: '320px' }}>
        <form className='px-4 py-3'>
          <MD.MDBInput label='Email adress' type='email' className='mb-4' />
          <MD.MDBInput label='Password' type='password' className='mb-4' />
          <MD.MDBRow className='mb-4'>
            <MD.MDBCol className='d-flex justify-content-center'>
              <MD.MDBCheckbox className='d-flex justify-content-center' label='Remember me' />
            </MD.MDBCol>
            <MD.MDBCol>
              <a href='#!'>Forgot password?</a>
            </MD.MDBCol>
          </MD.MDBRow>
          <MD.MDBBtn color='primary' className='btn-block'>
            Sign in
          </MD.MDBBtn>
        </form>
        <div className='dropdown-divider'></div>
        <MD.MDBDropdownItem link>New around here? Sign up</MD.MDBDropdownItem>
        <MD.MDBDropdownItem link>Forgot password?</MD.MDBDropdownItem>
      </MD.MDBDropdownMenu>
    </MD.MDBDropdown>



    <MD.MDBDropdown group>
        <MD.MDBDropdownToggle size='lg'>Large button</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown group>
        <MD.MDBBtn size='lg'> Large split button</MD.MDBBtn>
        <MD.MDBDropdownToggle size='lg' split />
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown group>
        <MD.MDBDropdownToggle size='sm'>Small button</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown group>
        <MD.MDBBtn size='sm'> Small split button</MD.MDBBtn>
        <MD.MDBDropdownToggle size='sm' split />
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>
      <MD.MDBDropdown dropup group>
        <MD.MDBDropdownToggle>Dropup</MD.MDBDropdownToggle>
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>

      <MD.MDBDropdown dropup group>
        <MD.MDBBtn>Split Dropup</MD.MDBBtn>
        <MD.MDBDropdownToggle />
        <MD.MDBDropdownMenu>
          <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
          <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
          <MD.MDBDropdownItem divider />
          <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
        </MD.MDBDropdownMenu>
      </MD.MDBDropdown>


      <MD.MDBInputGroup className='mb-3'>
        <MD.MDBDropdown>
          <MD.MDBDropdownToggle>Dropdown</MD.MDBDropdownToggle>
          <MD.MDBDropdownMenu>
            <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
            <MD.MDBDropdownItem divider />
            <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
          </MD.MDBDropdownMenu>
        </MD.MDBDropdown>
        <input className='form-control' type='text' />
      </MD.MDBInputGroup>

      <MD.MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' />
        <MD.MDBDropdown>
          <MD.MDBDropdownToggle>Dropdown</MD.MDBDropdownToggle>
          <MD.MDBDropdownMenu>
            <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
            <MD.MDBDropdownItem divider />
            <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
          </MD.MDBDropdownMenu>
        </MD.MDBDropdown>
      </MD.MDBInputGroup>

      <MD.MDBInputGroup className='mb-3'>
        <MD.MDBDropdown>
          <MD.MDBDropdownToggle>Dropdown</MD.MDBDropdownToggle>
          <MD.MDBDropdownMenu>
            <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
            <MD.MDBDropdownItem divider />
            <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
          </MD.MDBDropdownMenu>
        </MD.MDBDropdown>
        <input className='form-control' type='text' />
        <MD.MDBDropdown>
          <MD.MDBDropdownToggle>Dropdown</MD.MDBDropdownToggle>
          <MD.MDBDropdownMenu>
            <MD.MDBDropdownItem link>Action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Another action</MD.MDBDropdownItem>
            <MD.MDBDropdownItem link>Something else here</MD.MDBDropdownItem>
            <MD.MDBDropdownItem divider />
            <MD.MDBDropdownItem link>Separated link</MD.MDBDropdownItem>
          </MD.MDBDropdownMenu>
        </MD.MDBDropdown>
      </MD.MDBInputGroup>
      <MD.MDBIcon icon='camera' size='xs' />
      <MD.MDBIcon className='ms-1' icon='camera' size='sm' />
      <MD.MDBIcon className='ms-1' icon='camera' size='lg' />
      <MD.MDBIcon className='ms-1' icon='camera' size='2x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='3x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='4x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='5x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='6x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='7x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='8x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='9x' />
      <MD.MDBIcon className='ms-1' icon='camera' size='10x' />


      <MD.MDBListGroup style={{ minWidth: '22rem' }} light>
      <MD.MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
        <MD.MDBBtn size='sm' rounded color='link'>
          View
        </MD.MDBBtn>
      </MD.MDBListGroupItem>
      <MD.MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Alex Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
        <MD.MDBBtn size='sm' rounded color='link'>
          View
        </MD.MDBBtn>
      </MD.MDBListGroupItem>
      <MD.MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <img
            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
            alt=''
            style={{ width: '45px', height: '45px' }}
            className='rounded-circle'
          />
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Kate Hunington</p>
            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
          </div>
        </div>
        <MD.MDBBtn size='sm' rounded color='link'>
          View
        </MD.MDBBtn>
      </MD.MDBListGroupItem>
    </MD.MDBListGroup>


    <MD.MDBRow>
      <MD.MDBCol xl={6} className='mb-4'>
        <MD.MDBCard>
          <MD.MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>John Doe</p>
                  <p className='text-muted mb-0'>john.doe@gmail.com</p>
                </div>
              </div>
              <MD.MDBBadge pill color='success' light>
                Active
              </MD.MDBBadge>
            </div>
          </MD.MDBCardBody>
          <MD.MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MD.MDBIcon fas icon='envelope' />
            </MD.MDBBtn>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Call <MD.MDBIcon fas icon='phone' />
            </MD.MDBBtn>
          </MD.MDBCardFooter>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol xl={6} className='mb-4'>
        <MD.MDBCard>
          <MD.MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Alex Ray</p>
                  <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                </div>
              </div>
              <MD.MDBBadge pill color='primary' light>
                Onboarding
              </MD.MDBBadge>
            </div>
          </MD.MDBCardBody>
          <MD.MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MD.MDBIcon fas icon='envelope' />
            </MD.MDBBtn>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Call <MD.MDBIcon fas icon='phone' />
            </MD.MDBBtn>
          </MD.MDBCardFooter>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol xl={6} className='mb-4'>
        <MD.MDBCard>
          <MD.MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Kate Hunington</p>
                  <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
                </div>
              </div>
              <MD.MDBBadge pill color='warning' light>
                Awaiting
              </MD.MDBBadge>
            </div>
          </MD.MDBCardBody>
          <MD.MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MD.MDBIcon fas icon='envelope' />
            </MD.MDBBtn>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Call <MD.MDBIcon fas icon='phone' />
            </MD.MDBBtn>
          </MD.MDBCardFooter>
        </MD.MDBCard>
      </MD.MDBCol>
      <MD.MDBCol xl={6} className='mb-4'>
        <MD.MDBCard>
          <MD.MDBCardBody>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img
                  src='https://mdbootstrap.com/img/new/avatars/3.jpg'
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Michael Bale</p>
                  <p className='text-muted mb-0'>michael.bale@gmail.com</p>
                </div>
              </div>
              <MD.MDBBadge pill color='danger' light>
                Removed
              </MD.MDBBadge>
            </div>
          </MD.MDBCardBody>
          <MD.MDBCardFooter background='light' border='0' className='p-2 d-flex justify-content-around'>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Message <MD.MDBIcon fas icon='envelope' />
            </MD.MDBBtn>
            <MD.MDBBtn color='link' rippleColor='primary' className='text-reset m-0'>
              Call <MD.MDBIcon fas icon='phone' />
            </MD.MDBBtn>
          </MD.MDBCardFooter>
        </MD.MDBCard>
      </MD.MDBCol>
    </MD.MDBRow>

    <div>
    <MD.MDBSpinner className='me-2' style={{ width: '3rem', height: '3rem' }}>
        <span className='visually-hidden'>Loading...</span>
      </MD.MDBSpinner>

      <MD.MDBSpinner grow style={{ width: '3rem', height: '3rem' }}>
        <span className='visually-hidden'>Loading...</span>
      </MD.MDBSpinner>

    </div>
    <div className='bg-image'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Can you see me?</p>
        </div>
      </div>
    </div>


    <MD.MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>LAUNCH DEMO MODAL</MD.MDBBtn>

<MD.MDBModal open={scrollableModal} setOpen={setScrollableModal} tabIndex='-1'>
  <MD.MDBModalDialog scrollable>
    <MD.MDBModalContent>
      <MD.MDBModalHeader>
        <MD.MDBModalTitle>Modal title</MD.MDBModalTitle>
        <MD.MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setScrollableModal(!scrollableModal)}
        ></MD.MDBBtn>
      </MD.MDBModalHeader>
      <MD.MDBModalBody>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor.
        </p>
        <p>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </p>
      </MD.MDBModalBody>
      <MD.MDBModalFooter>
        <MD.MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
          Close
        </MD.MDBBtn>
        <MD.MDBBtn>Save changes</MD.MDBBtn>
      </MD.MDBModalFooter>
    </MD.MDBModalContent>
  </MD.MDBModalDialog>
</MD.MDBModal>



<MD.MDBBtn onClick={toggleOpen}>Launch demo modal</MD.MDBBtn>

<MD.MDBModal tabIndex='-1' open={popoverModal} setOpen={setPopoverModal}>
  <MD.MDBModalDialog>
    <MD.MDBModalContent>
      <MD.MDBModalHeader>
        <MD.MDBModalTitle>Modal title</MD.MDBModalTitle>
        <MD.MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MD.MDBBtn>
      </MD.MDBModalHeader>
      <MD.MDBModalBody>
        <h5>Popover in a modal</h5>
        <p>
          This
          <MD.MDBPopover open={popoverModal} color='secondary' btnChildren='button' placement='right'>
            <MD.MDBPopoverHeader>Popover title</MD.MDBPopoverHeader>
            <MD.MDBPopoverBody>Popover body content is set in this attribute.</MD.MDBPopoverBody>
          </MD.MDBPopover>
          triggers a popover on click.
        </p>
        <hr />
        <h5>Tooltips in a modal</h5>
        <p>
          <MD.MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title='Tooltip'>
            This link
          </MD.MDBTooltip>{' '}
          and{' '}
          <MD.MDBTooltip tag='a' wrapperProps={{ href: '#!' }} title='Tooltip'>
            that link
          </MD.MDBTooltip>{' '}
          have tooltips on hover.
        </p>
      </MD.MDBModalBody>

      <MD.MDBModalFooter>
        <MD.MDBBtn color='secondary' onClick={toggleOpen}>
          Close
        </MD.MDBBtn>
        <MD.MDBBtn>Save changes</MD.MDBBtn>
      </MD.MDBModalFooter>
    </MD.MDBModalContent>
  </MD.MDBModalDialog>
</MD.MDBModal>

<MD.MDBBtn onClick={toggleOpen2}>Top right</MD.MDBBtn>

<MD.MDBModal
  animationDirection='right'
  open={topRightModal}
  tabIndex='-1'
  setOpen={setTopRightModal}
>
  <MD.MDBModalDialog position='top-right' side>
    <MD.MDBModalContent>
      <MD.MDBModalHeader className='bg-info text-white'>
        <MD.MDBModalTitle>Product in the cart</MD.MDBModalTitle>
        <MD.MDBBtn
          color='none'
          className='btn-close btn-close-white'
          onClick={toggleOpen2}
        ></MD.MDBBtn>
      </MD.MDBModalHeader>
      <MD.MDBModalBody>
        <div className='row'>
          <div className='col-3 text-center'>
            <i className='fas fa-shopping-cart fa-4x text-info'></i>
          </div>

          <div className='col-9'>
            <p>Do you need more time to make a purchase decision?</p>
            <p>No pressure, your product will be waiting for you in the cart.</p>
          </div>
        </div>
      </MD.MDBModalBody>
      <MD.MDBModalFooter>
        <MD.MDBBtn color='info'>Go to the cart</MD.MDBBtn>
        <MD.MDBBtn outline color='info' onClick={toggleOpen2}>
          Close
        </MD.MDBBtn>
      </MD.MDBModalFooter>
    </MD.MDBModalContent>
  </MD.MDBModalDialog>
</MD.MDBModal>

<div className="bg-success p-2 text-white overflow-auto" >This is default success background</div>
      <div className="bg-success p-2 text-white bg-opacity-75">This is 75% opacity success background</div>
      <div className="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
      <div className="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
      <div className="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>




      <MD.MDBPopover color='secondary' btnChildren='Popover on top' placement='top'>
        <MD.MDBPopoverHeader>Popover title</MD.MDBPopoverHeader>
        <MD.MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MD.MDBPopoverBody>
      </MD.MDBPopover>

      <MD.MDBPopover color='secondary' btnChildren='Popover on right' placement='right'>
        <MD.MDBPopoverHeader>Popover title</MD.MDBPopoverHeader>
        <MD.MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MD.MDBPopoverBody>
      </MD.MDBPopover>

      <MD.MDBPopover color='secondary' btnChildren='Popover on bottom' placement='bottom'>
        <MD.MDBPopoverHeader>Popover title</MD.MDBPopoverHeader>
        <MD.MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MD.MDBPopoverBody>
      </MD.MDBPopover>

      <MD.MDBPopover color='secondary' btnChildren='Popover on left' placement='left'>
        <MD.MDBPopoverHeader>Popover title</MD.MDBPopoverHeader>
        <MD.MDBPopoverBody>And here's some amazing content. It's very engaging. Right?</MD.MDBPopoverBody>
      </MD.MDBPopover>




      <MD.MDBProgress height='20'>
      <MD.MDBProgressBar striped animated width='25' valuemin={0} valuemax={100}>
        25%
      </MD.MDBProgressBar>
    </MD.MDBProgress>

    <MD.MDBBtnGroup>
      <MD.MDBRadio btnColor='warning' id='btn-radio' name='options' wrapperTag='span' label='Radio button' />
      <MD.MDBRadio
       
        btnColor='warning'
        id='btn-radio2'
        name='options'
        wrapperClass='mx-2'
        wrapperTag='span'
        label='Radio button'
        defaultChecked
      />
      <MD.MDBRadio  btnColor='warning' id='btn-radio3' name='options' wrapperTag='span' label='Radio button' />
    </MD.MDBBtnGroup>


<div className='shadow-5 bg-success w-50 h-50'>Hello</div>
<MD.MDBTooltip
      wrapperProps={{ color: 'secondary' }}
      title={
        <>
          <em>Tooltip</em> <u>with</u> <b>HTML</b>
        </>
      }
    >
      Tooltip with HTML
    </MD.MDBTooltip>


    <MD.MDBInputGroup
        className='mb-3'
        textBefore='Upload'
        textTag='label'
        textProps={{ htmlFor: 'inputGroupFile01' }}
      >
        <input className='form-control' type='file' id='inputGroupFile01' />
      </MD.MDBInputGroup>

      <MD.MDBInputGroup
        className='mb-3'
        textAfter='Upload'
        textTag='label'
        textProps={{ htmlFor: 'inputGroupFile02' }}
      >
        <input className='form-control' type='file' id='inputGroupFile02' />
      </MD.MDBInputGroup>

      <MD.MDBInputGroup className='mb-3'>
        <MD.MDBBtn outline color='secondary'>
          Button
        </MD.MDBBtn>
        <input className='form-control' type='file' />
      </MD.MDBInputGroup>

      <MD.MDBInputGroup className='mb-3'>
        <input className='form-control' type='file' />
        <MD.MDBBtn outline color='secondary'>
          Button
        </MD.MDBBtn>
      </MD.MDBInputGroup>

















    </div>}
    </>
  );
}