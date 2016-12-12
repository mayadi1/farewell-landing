import React, {Component} from 'react';
import './BodyDisplay.css';
// import IPhoneImage from './IPhoneImage/IPhoneImage.js';
import iphoneStockImg from './iphone-stock.png';
// import screenshot from './screenshot.png';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class BodyDisplay extends Component {
  static displayName = 'BodyDisplay';
  render() {
    return (
      <div className='BodyDisplay'>
        <img
          alt={'Phone with FareWell App comparing Uber and Lyft prices'}
          className={'IPhoneImage'}
          src={iphoneStockImg}
        />
      </div>
    );
  }
}
