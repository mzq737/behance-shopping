import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from  'axios';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HVgKTFhTWZxv4zT660KkaULbtb0dZiEoKQJpy9OhVmcmHhCgPO1rETSViGmWucNkQ8cBRswT1GTAbDJBdPtgeqz00I0hvvMnG';
  
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert(
        'There is an issue with your payment. Please check your credit card number.'
      );
    });
  }

  return (
    <StripeCheckout 
      label='Pay Now'  
      name='Behance Shopping Ltd.'
      billingAddress
      shippingAddress
      // image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      pannelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;