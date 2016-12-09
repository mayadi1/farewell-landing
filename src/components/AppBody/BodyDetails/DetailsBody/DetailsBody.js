import React, {Component} from 'react';
import './DetailsBody.css';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class DetailsBody extends Component {
  static displayName = 'DetailsBody';
  render() {
    return (
      <div className='DetailsBody'>
        <p>{`FareWell saves you time from switching between Uber and Lyft to find the cheapest ride by comparing fares between Uber and Lyft's product lines. FareWell averages costs and automatically factors Uber Surge and Lyft Prime Time surcharges so you never have to.`}</p>
      </div>
    );
  }
}
