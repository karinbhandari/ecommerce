import React, { useState, ReactElement, FunctionComponent } from 'react';
import { IconButton } from '@material-ui/core';
import Slider from 'react-slick';
import Link from 'next/link';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import useProductDetailSliderStyle from './styles';

const dataSource = [
  'https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$',
  'https://lsco.scene7.com/is/image/lsco/005010193-side-pdp?$regular_mobile$',
  'https://lsco.scene7.com/is/image/lsco/levis/clothing/045111907-side-pdp.jpg?$regular_mobile$',
];

const ProductDetailSlider: FunctionComponent = (): ReactElement => {
  const classes = useProductDetailSliderStyle();
  const [showFullScreenSlider, setShowFullScreenSlider] = useState<boolean>(false);
  const openFullScreenMode = () => {
    setShowFullScreenSlider(true);
  };
  const closeFullScreenMode = () => {
    setShowFullScreenSlider(false);
  };
  const settings = {
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.ProductDetailSliderWrap}>
      <Slider {...settings}>
        <img
          src={'https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$'}
          alt="product1"
        />
        <img
          src={'https://lsco.scene7.com/is/image/lsco/005010193-side-pdp?$regular_mobile$'}
          alt="product2"
        />
        <img
          src={
            'https://lsco.scene7.com/is/image/lsco/levis/clothing/045111907-side-pdp.jpg?$regular_mobile$'
          }
          alt="product3"
        />
      </Slider>
      <IconButton className={classes.sliderEnlargeImages} onClick={openFullScreenMode}>
        <AddCircleOutlineRoundedIcon fontSize="large" className={classes.sliderEnlargeImagesIcon} />
      </IconButton>
      {showFullScreenSlider && (
        <div className={classes.fullScreenProductDetailSlider}>
          <ReactSlick
            {...{
              // ...settings,
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              customPaging: (i) => {
                if (i === 0) {
                  return (
                    <img
                      src={`https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$`}
                      alt="product"
                    />
                  );
                } else if (i === 1) {
                  return (
                    <img
                      src={`https://lsco.scene7.com/is/image/lsco/005010193-side-pdp?$regular_mobile$`}
                      alt="product"
                    />
                  );
                } else if (i === 2) {
                  return (
                    <img
                      src={`https://lsco.scene7.com/is/image/lsco/levis/clothing/045111907-side-pdp.jpg?$regular_mobile$`}
                      alt="product"
                    />
                  );
                }
              },
            }}
            // {...rsProps}
          >
            {dataSource.map((src, index) => (
              <ReactImageMagnify
                key={index}
                {...{
                  smallImage: {
                    alt: 'Wristwatch by Versace',
                    isFluidWidth: true,
                    src: src,
                    height: 400,
                    width: 400,
                    // src:
                    //   'https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$',
                  },
                  largeImage: {
                    src: src,
                    // src:
                    //   'https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$',
                    width: 1200,
                    height: 1200,
                    isFluidWidth: true,
                  },
                  isActivatedOnTouch: true,
                  enlargedImagePosition: 'over',
                }}
              />
            ))}
          </ReactSlick>
          <IconButton
            className={classes.fullScreenProductDetailSliderCloseBtn}
            onClick={closeFullScreenMode}
          >
            <CloseRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ProductDetailSlider;
