'use client'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from "next/image";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import styles from '../styles/Navbar.module.css';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
     

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto '><div className='flex mb-4 text-center  items-center justify-center'><Image className="me-3"  width={60}height={60} src="/topi.png" alt="Tahiri Services"/>
              <h6 id={styles.title} className='text-uppercase fw-bold'>
           
                
                Tahiri Services
              </h6></div>
            
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kandiaro, Sindh 67050, PK
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ten3live@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 305 8452372
              </p>
              <p>
              <MDBIcon fab icon="whatsapp" className="me-3"/>  + 92 305 8452372
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
     <section className='text-center p-4'>
      <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
        </section>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright  &copy; {new Date().getFullYear()} &nbsp;
        <a className='text-reset fw-bold' href='https://TahiriServices.com/'>
          TahiriServices.com 
        </a>
      </div>
    </MDBFooter>
  );
}