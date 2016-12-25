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
        <p>{`The FareWell app for iPhone and Android phones gives instant fare estimates between Uber and Lyft. Price estimates are averaged and automatically factor Uber Surge and Lyft Prime Time surcharges so you never have to.`}</p>
      </div>
    );
  }
}
