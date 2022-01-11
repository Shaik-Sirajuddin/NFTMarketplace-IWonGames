import React from 'react';
import SliderCarousel from '../components/SliderCarouselsingle';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import ColumnNew from '../components/ColumnNew';
import AuthorList from '../components/authorList';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

import video from "../../assets/videos/game1.mp4";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #212428;
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: #fff;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  .jumbotron.no-bg{
    background: center bottom;
    background-size: cover;
    height: 100%;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
`;

const comingSoon = true;

const game2 = () => (
  <div>
    <GlobalStyles />
    <section className="jumbotron no-bg" style={{ backgroundImage: `url(${'./img/background/7.jpg'})` }}>
      <div className='container'>
        <div className='row'>
          <div className='container'>
            {/* <video controls autoPlay loop height={'90%'} width={'100%'}>
            <source src={video} type="video/mp4" />
          </video> */}
            <h3 style={{"font-size" :100,"alignContent":'center'}} >Coming Soon...</h3>
          </div>
        </div>

      </div>
    </section>

    <section className='container'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {(comingSoon != true) && <h2 className='style-2'>NFT's</h2>}
          </div>
        </div>
        {(comingSoon != true) && <ColumnNew />}
      </div>
    </section>

    {/* <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Hot Collections</h2>
        </div>
      </div>
      <div className='container no-top'>
        <div className='row'>
          <div className='col-lg-12 px-0'>
            <CarouselCollection />
          </div>
        </div>
      </div>
    </section> */}

    {/* <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Top Seller</h2>
        </div>
        <div className='col-lg-12'>
          <AuthorList />
        </div>
      </div>
    </section> */}

    {(comingSoon != true) && <section className='container no-top'>
      <div className='row'>
        <div className='col-lg-12'>
          <h2 className='style-2'>Create and sell</h2>
        </div>
      </div>
      <div className='container px-0'>
        <FeatureBox />
      </div>
    </section>}

    <Footer />

  </div>
);
export default game2;