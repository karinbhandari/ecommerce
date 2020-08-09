import React, { useState, ReactElement } from 'react'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { Typography, Theme, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
// import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded'
import Layout from '../../src/modules/core/components/Layout'
import ProductDetailSlider from '../../src/modules/core/components/Product/ProductDetailSlider/ProductDetailSlider'
import utilities from '../../src/styles/utilities'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const ProductDetailStyle = (theme: Theme) =>
  createStyles({
    ProductDetailWrap: {
      width: '100%',
      //   border: '1px solid red',
      minHeight: 200,
      height: 'auto',
      padding: theme.spacing(1),
    },
    ProductDetailSlider: {
      width: '100%',
      height: 'auto',
      //   border: '2px solid green',
    },
    ProductDetailDetail: {
      width: '100%',
      minHeight: 100,
      height: 'auto',
      //   border: '2px solid blue',
      padding: theme.spacing(1, 0),
      '& > div': {
        width: '100%',
        height: 'auto',
        // border: '1px solid red',
        ...utilities.rowFlexStartCenter,
      },
    },
    ProductDetailColor: {
      width: '100%',
      //   minHeight: 100,
      height: 'auto',
      //   border: '1px solid red',
    },
    ProductDetailSize: {
      width: '100%',
      //   minHeight: 100,
      height: 'auto',
      //   border: '1px solid red',
    },
    ProductDetailDesc: {
      width: '100%',
      minHeight: 100,
      height: 'auto',
      ...utilities.columnFlex,
      //   border: '1px solid red',
    },
  })

type ProductDetailProps = {}

type ProductDetailStyleType = ProductDetailProps & WithStyles<typeof ProductDetailStyle>

const ProductDetail = ({ classes }: ProductDetailStyleType): ReactElement => {
  return (
    <Layout>
      <div className={classes.ProductDetailWrap}>
        <div className={classes.ProductDetailSlider}>
          <ProductDetailSlider />
        </div>
        <div className={classes.ProductDetailDetail}>
          <div>
            <Typography variant="body1" component="p">
              AKS
            </Typography>
          </div>
          <div>
            <Typography variant="body1" component="p">
              AKS Women Yellow & White Floral Print Straight Kurta
            </Typography>
          </div>
          <div>
            <Typography variant="body1" component="p">
              Rs. 500 50% OFF
            </Typography>
          </div>
        </div>
        <div className={classes.ProductDetailColor}></div>
        <div className={classes.ProductDetailSize}></div>
        <div className={classes.ProductDetailDesc}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="product-details-header"
            >
              <Typography>DETAILS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="product-fit-&-sizing-header"
            >
              <Typography>FIT & SIZING</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Layout>
  )
}

export default withStyles(ProductDetailStyle)(ProductDetail)
