import React, {Component} from 'react';
import './BodyDetails.css';
import DetailsHeader from './DetailsHeader/DetailsHeader.js';
import DetailsBody from './DetailsBody/DetailsBody.js';
import DetailsFooter from './DetailsFooter/DetailsFooter.js';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class BodyDetails extends Component {
  static displayName = 'BodyDetails';
  render() {
    return (
      <div className='BodyDetails'>
        <DetailsHeader />
        <DetailsBody />
        <DetailsFooter />
      </div>
    );
  }
}
