import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import utilities from '../../../../../styles/utilities';

const useProductDetailSliderStyle = makeStyles<Theme>((theme) =>
  createStyles({
    ProductDetailSliderWrap: {
      width: '100%',
    },
    sliderEnlargeImages: {
      position: 'absolute',
      right: 0,
      bottom: 10,
    },
    sliderEnlargeImagesIcon: {
      color: theme.palette.common.black,
      //   background: theme.palette.common.white,
      borderRadius: '50%',
      padding: theme.spacing(0.2),
    },
    fullScreenProductDetailSlider: {
      background: theme.palette.common.white,
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      ...utilities.rowFlexCenter,
      top: 0,
      zIndex: 100,
      '& > div': {
        width: '100%',
        height: 'auto',
        ...utilities.columnFlex,
        '& > div': {
          height: `auto !important`,
          width: `100% !important`,
        },
        '& > ul': {
          height: `auto !important`,
          width: `100% !important`,
          '& > li': {
            height: `50px !important`,
            width: `50px !important`,
            border: `1px solid ${theme.palette.grey[50]}`,
            '& > img': {
              height: '100%',
              width: 'auto',
            },
          },
        },
      },
    },
    fullScreenProductDetailSliderCloseBtn: {
      color: theme.palette.common.black,
      borderRadius: '50%',
      padding: theme.spacing(0.2),
      top: 0,
      position: 'absolute',
      right: 0,
    },
  })
);

export default useProductDetailSliderStyle;
