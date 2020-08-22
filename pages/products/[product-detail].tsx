import React, { useState, ReactElement } from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Theme, List, ListItem, Button } from '@material-ui/core';
// import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded'
import Layout from '../../src/modules/core/components/Layout';
import ProductDetailSlider from '../../src/modules/core/components/Product/ProductDetailSlider/ProductDetailSlider';
import utilities from '../../src/styles/utilities';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProductCard from '../../src/modules/core/components/Product/ProductCard/ProductCard';
import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from '../../src/modules/core/components/Accordion/Accordion';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import IncDescButton from '../../src/modules/core/components/IncDescButton/IncDescButton';

const ProductDetailStyle = (theme: Theme) =>
  createStyles({
    ProductDetailWrap: {
      width: '100%',
      //   border: '1px solid red',
      minHeight: 200,
      height: 'auto',
      '& > div': {
        marginBottom: theme.spacing(1),
      },
    },
    ProductDetailSlider: {
      width: '100%',
      height: 'auto',
      position: 'relative',
    },
    ProductDetailDetail: {
      width: '100%',
      minHeight: 100,
      height: 'auto',
      padding: theme.spacing(1),
      // border: '2px solid blue',
      '& > div': {
        width: '100%',
        height: 'auto',
        padding: theme.spacing(0.2, 0),
        ...utilities.rowFlexStartCenter,
      },
      '& >:nth-child(1)': {
        // border: '1px solid red',
        '& > p': {
          fontWeight: 'bold',
        },
      },
      // '& >:nth-child(2)': {
      //   border: '1px solid blue',
      // },
      '& >:nth-child(3)': {
        // border: '1px solid green',
        '& >:nth-child(1)': {
          fontWeight: 'bold',
        },
        '& >:nth-child(2)': {
          textDecoration: 'line-through',
          marginLeft: theme.spacing(1),
        },
        '& >:nth-child(3)': {
          fontWeight: 'bold',
          marginLeft: theme.spacing(1),
        },
      },
    },
    ProductDetailColor: {
      width: '100%',
      //   minHeight: 100,
      padding: theme.spacing(0.2, 1),
      height: 'auto',
      //   border: '1px solid red',
      '& > :nth-child(1)': {
        '& > p': {
          ...utilities.rowFlexStartCenter,
          fontWeight: 'bold',
        },
      },
      '& > :nth-child(2)': {
        padding: theme.spacing(0.5, 0),
        // border: '1px solid blue',
        ...utilities.rowFlex,
        flexWrap: 'wrap',
        '& > span': {
          border: `1px solid ${theme.palette.common.black}`,
          height: 50,
          width: 50,
          ...utilities.rowFlexCenter,
          borderRadius: '50%',
          margin: theme.spacing(0.5),
        },
      },
    },
    ProductDetailSize: {
      width: '100%',
      padding: theme.spacing(0.2, 1),
      //   minHeight: 100,
      height: 'auto',
      '& > :nth-child(1)': {
        // border: '1px solid green',
        ...utilities.rowFlex,
        flexWrap: 'wrap',
        '& > p': {
          // border: '1px solid red',
          ...utilities.rowFlexStartCenter,
          fontWeight: 'bold',
        },
      },
      '& > :nth-child(2)': {
        padding: theme.spacing(0.5, 0),
        // border: '1px solid blue',
        ...utilities.rowFlex,
        flexWrap: 'wrap',
        '& > span': {
          border: `1px solid ${theme.palette.common.black}`,
          padding: theme.spacing(1, 2),
          borderRadius: 2,
          margin: theme.spacing(0.5),
        },
      },
    },
    ProductDetailQuantity: {
      width: '100%',
      //   minHeight: 100,
      padding: theme.spacing(0.2, 1),
      ...utilities.rowFlex,
      justifyContent: 'space-between',
      height: 'auto',
      '& > p': {
        ...utilities.rowFlexStartCenter,
        fontWeight: 'bold',
      },
    },
    ProductDetailActions: {
      width: '100%',
      //   minHeight: 100,
      padding: theme.spacing(1),
      height: 'auto',
      '& >:nth-child(2)': {
        marginTop: 10,
      },
    },
    ProductDetailDesc: {
      width: '100%',
      minHeight: 100,
      height: 'auto',
      ...utilities.columnFlex,
      //   border: '1px solid red',
    },
    ProductDetailSimilarProducts: {
      width: '100%',
      height: 'auto',
      ...utilities.rowFlex,
    },
  });

type ProductDetailProps = {};

type ProductDetailStyleType = ProductDetailProps & WithStyles<typeof ProductDetailStyle>;

const ProductDetail = ({ classes }: ProductDetailStyleType): ReactElement => {
  return (
    <Layout detailHeader={true} headerText={'Demo Product'}>
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
            <Typography variant="body2" color="textSecondary" component="p">
              AKS Women Yellow & White Floral Print Straight Kurta
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="p">
              Rs. 500
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Rs. 999
            </Typography>
            <Typography variant="body2" component="p" color="error">
              50% OFF
            </Typography>
          </div>
        </div>
        <div className={classes.ProductDetailColor}>
          <div>
            <Typography variant="body1" component="p">
              Color
            </Typography>
          </div>
          <div>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>W</span>
          </div>
        </div>
        <div className={classes.ProductDetailSize}>
          <div>
            <Typography variant="body1" component="p">
              Size
            </Typography>
          </div>
          <div>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>W</span>
          </div>
        </div>
        <div className={classes.ProductDetailQuantity}>
          <Typography variant="body1" component="p">
            Quanity
          </Typography>
          <IncDescButton />
        </div>
        <div className={classes.ProductDetailActions}>
          <Button variant="outlined" color="primary">
            <FavoriteBorderOutlinedIcon /> ADD TO WHISHLIST
          </Button>
          <Button variant="contained" color="primary">
            <LocalMallOutlinedIcon /> ADD TO BAG
          </Button>
        </div>
        <div className={classes.ProductDetailDesc}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="product-details-header"
            >
              <Typography>DETAILS</Typography>
              {/* <AvTimerIcon /> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Typography variant="body1" component="p">
                    Narrow with a tailor-inspired taper. The 512™ Slim Taper Fit Jean is infused
                    with just the right amount of stretch, for comfort that keeps up with your every
                    move.
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="product-fit-&-sizing-header"
            >
              <Typography>FIT & SIZING</Typography>
              {/* <DescriptionRoundedIcon /> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Typography variant="body1" component="p">
                    Inseam Length: 32 in.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p">
                    Inseam Length: 32 in.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p">
                    Inseam Length: 32 in.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" component="p">
                    Inseam Length: 32 in.
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="product-fit-&-sizing-header"
            >
              <Typography>MATERIAL</Typography>
              {/* <CardGiftcardRoundedIcon /> */}
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem>
                  <Typography variant="body1" component="p">
                    99% Cotton, 1% Elastane
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={classes.ProductDetailSimilarProducts}>
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Layout>
  );
};

export default withStyles(ProductDetailStyle)(ProductDetail);
