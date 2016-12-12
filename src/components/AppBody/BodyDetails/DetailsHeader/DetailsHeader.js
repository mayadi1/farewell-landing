import React, {Component} from 'react';
import './DetailsHeader.css';
import logo from './Icon-75.jpg';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class DetailsHeader extends Component {
  static displayName = 'DetailsHeader';
  render() {
    return (
      <div className='DetailsHeader'>
        <img src={logo} alt={'FareWell App Icon'} />
        <h1>{'FareWell'}</h1>
      </div>
    );
  }
}
