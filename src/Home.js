import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';
const Home = () => {
  return (
    <>
      <div className='main-page'>
        <div className='main-content'>
          <div className='main-heading'>
            <h2>
              DISCOVER SUPER
              <br />
              <span>NFTs</span>
            </h2>
          </div>
          <div className='main-para'>
            <p>
              At edgeXgame we are building a game collectable NFT marketplace
              with NFT based monthly subscription model. Players will be able to
              buy, sell and trade their digital collectables on our platform.
              These collectables are unique and cannot be replicated or
              destroyed.
            </p>
          </div>
          <div className='btn-container'>
            <Link to='/buy' className='btn btn-buy'>
              Explore
            </Link>
            <Link to='/aboutus' className='btn btn-buy'>
              Our Team
            </Link>
          </div>
        </div>
        <div className='main-images'>
          <div className='main-images-1'>
            <img src='./images/nft_bg_1 (1).jpeg' alt='' className='img-main' />
            <img src='./images/nft_2_bg (1).jpg' alt='' className='img-main' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
