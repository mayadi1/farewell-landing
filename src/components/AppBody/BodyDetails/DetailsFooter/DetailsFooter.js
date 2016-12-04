import React, {Component} from 'react';
import './DetailsFooter.css';
import RaisedButton from 'material-ui/RaisedButton';
import GooglePlaySvg from './google_play_24px.svg';
import AppleSvg from './apple_24px.svg';

const buttonStyles = {
  style: {
    height: '42px',
  },
  labelStyle: {
    display: 'flex',
    'align-items': 'center'
  },
  overlayStyle: {
    height: '42px',
    display: 'flex',
  }
};

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
          href={'https://itunes.apple.com/us/app/farewell-for-uber-and-lyft/id1119039401?mt=8'}
          label={'App Store'}
          icon={<img src={AppleSvg} alt={'Apple Icon'} />}
        />
        <RaisedButton
          {...buttonStyles}
          className={'store-btn'}
          href={'https://play.google.com/store/apps/details?id=com.farewell&hl=en'}
          label={'Google Play'}
          icon={<img src={GooglePlaySvg} alt={'Google Play Icon'} />}
        />
      </div>
    );
  }
}
