import React, {Component} from 'react';
import './DetailsFooter.css';

import RaisedButton from 'material-ui/RaisedButton';
import AppleSvg from './apple_24px.svg';
import GooglePlaySvg from './google_play_24px.svg';

const APP_STORE_URL = 'https://itunes.apple.com/us/app/farewell-for-uber-and-lyft/id1119039401?mt=8';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.farewell&hl=en';

const buttonStyles = (() => {
  const BUTTON_HEIGHT = 42;
  return {
    style: {
      height: `${BUTTON_HEIGHT}px`,
    },
    labelStyle: {
      display: 'flex',
      alignItems: 'center'
    },
    overlayStyle: {
      height: `${BUTTON_HEIGHT}px`,
      display: 'flex',
    }
  };
})();

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class DetailsFooter extends Component {
  static displayName = 'DetailsFooter';
  render() {
    return (
      <div className='DetailsFooter'>
        <RaisedButton
          {...buttonStyles}
          className={'store-btn'}
          href={APP_STORE_URL}
          icon={<img src={AppleSvg} alt={'Apple Icon'} />}
          label={'App Store'}
          rel={'external'}
        />
        <RaisedButton
          {...buttonStyles}
          className={'store-btn'}
          href={GOOGLE_PLAY_URL}
          icon={<img src={GooglePlaySvg} alt={'Google Play Icon'} />}
          label={'Google Play'}
          rel={'external'}
        />
      </div>
    );
  }
}
