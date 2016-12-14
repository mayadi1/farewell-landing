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
        <p>{`The FareWell app for iOS and Android saves you time switching between Uber and Lyft rides by comparing fares between product lines. FareWell averages costs and automatically factors Uber Surge and Lyft Prime Time surcharges so you never have to.`}</p>
      </div>
    );
  }
}
