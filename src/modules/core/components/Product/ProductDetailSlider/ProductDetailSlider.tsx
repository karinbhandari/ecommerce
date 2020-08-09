import React, { useState, ReactElement } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core'
import Slider from 'react-slick'
import Link from 'next/link'

const ProductDetailSliderStyle = (theme: Theme) =>
  createStyles({
    ProductDetailSliderWrap: {
      width: '100%',
      border: '1px solid red',
      // minHeight: 200,
      // height: '200px',
    },
    // ProductDetailSlider: {
    //     width: '100%',
    //     minHeight: 150,
    //     height: 'auto',
    //     border: '1px solid red'
    // },
    // ProductDetailDetail: {
    //     width: '100%',
    //     minHeight: 100,
    //     height: 'auto',
    //     border: '1px solid red'
    // },
    // ProductDetailColor: {
    //     width: '100%',
    //     minHeight: 100,
    //     height: 'auto',
    //     border: '1px solid red'
    // },
    // ProductDetailSize: {
    //     width: '100%',
    //     minHeight: 100,
    //     height: 'auto',
    //     border: '1px solid red'
    // },
    // ProductDetailDesc: {
    //     width: '100%',
    //     minHeight: 100,
    //     height: 'auto',
    //     border: '1px solid red'
    // }
  })

type ProductDetailSliderStyle = {}

type ProductDetailSliderStyleType = ProductDetailSliderStyle &
  WithStyles<typeof ProductDetailSliderStyle>

const ProductDetailSlider = ({ classes }: ProductDetailSliderStyleType): ReactElement => {
  const settings = {
    customPaging: (i) => {
      if (i === 0) {
        return (
          <img
            src={`https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$`}
            alt="product"
            style={{
              height: '50px',
              width: 'auto',
              // objectFit: 'cover',
              // border: '1px solid red',
            }}
          />
        )
      } else if (i === 1) {
        return (
          <img
            src={`https://lsco.scene7.com/is/image/lsco/005010193-side-pdp?$regular_mobile$`}
            alt="product"
            style={{
              height: '50px',
              width: 'auto',
            }}
          />
        )
      } else if (i === 2) {
        return (
          <img
            src={`https://lsco.scene7.com/is/image/lsco/levis/clothing/045111907-side-pdp.jpg?$regular_mobile$`}
            alt="product"
            style={{
              height: '50px',
              width: 'auto',
            }}
          />
        )
      }
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    // <div className={classes.ProductDetailSliderWrap}>
    <Slider {...settings}>
      <img
        src={'https://lsco.scene7.com/is/image/lsco/005010193-dynamic1-pdp?$regular_mobile$'}
        alt="product1"
        style={{
          height: '300px !important',
          width: 'auto',
          border: '2px solid blue',
        }}
      />
      <img
        style={{
          height: '300px !important',
          width: 'auto',
          border: '2px solid blue',
        }}
        src={'https://lsco.scene7.com/is/image/lsco/005010193-side-pdp?$regular_mobile$'}
        alt="product2"
      />
      <img
        style={{
          height: '300px !important',
          width: 'auto',
          border: '2px solid blue',
        }}
        src={
          'https://lsco.scene7.com/is/image/lsco/levis/clothing/045111907-side-pdp.jpg?$regular_mobile$'
        }
        alt="product3"
      />
    </Slider>
    // </div>
  )
}

export default withStyles(ProductDetailSliderStyle)(ProductDetailSlider)
