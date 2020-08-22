import React, { ReactElement, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import utilities from '../../src/styles/utilities';
import ShippingBillingAddress from '../../src/modules/Checkout/ShippingBillingAddress/ShippingBillingAddress';
import DeliveryMethod from '../../src/modules/Checkout/DeliveryMethod/DeliveryMethod';
import PaymentInfo from '../../src/modules/Checkout/PaymentInfo/PaymentInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkOutWrap: {
      width: '100%',
      minHeight: 500,
      border: '1px solid red',
      height: 'auto',
      ...utilities.columnFlex,
    },
    checkOutWrapSteppers: {
      height: 100,
      width: '100%',
      border: '1px solid red',
    },
    checkOutWrapActiveStep: {
      minHeight: 400,
      height: 'auto',
      width: '100%',
      border: '1px solid green',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ['Shipping Address', 'Delivery Method', 'Payment Info'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const CheckOut = (): ReactElement => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.checkOutWrap}>
      <div className={classes.checkOutWrapSteppers}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={classes.checkOutWrapActiveStep}>
        {activeStep === 0 ? (
          <ShippingBillingAddress />
        ) : <DeliveryMethod /> ? (
          <PaymentInfo />
        ) : (
          <p>asdasd</p>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
