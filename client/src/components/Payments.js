import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
				name="Emaily"
				description="$5 for 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<div className="navbar-item">
					<button className="button is-light">Add credits</button>
				</div>
			</StripeCheckout>
    );
  }
}

export default Payments;
