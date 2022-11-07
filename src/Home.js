import React, { useState } from 'react';
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              suscipit tenetur veritatis sequi cum iure. Autem similique,
              consequatur ex rerum, sed aut inventore reprehenderit quis
              repellendus dicta cupiditate, commodi explicabo maxime quia
              consequuntur quod placeat et. Fuga, quasi fugit architecto
              assumenda nesciunt numquam similique adipisci suscipit eligendi
              aut perspiciatis ducimus unde pariatur a sunt culpa delectus eaque
              natus sequi in alias facere excepturi omnis! Rem sequi adipisci
              accusamus sapiente dicta.
            </p>
          </div>
          <div className='btn-container'>
            <button className='btn btn-buy'>Explore</button>
            <button className='btn btn-buy'>Our Team</button>
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
