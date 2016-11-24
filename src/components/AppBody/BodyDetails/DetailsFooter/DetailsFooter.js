import React, {Component} from 'react';
import './DetailsFooter.css';
import RaisedButton from 'material-ui/RaisedButton';

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
          className={'store-btn'}
          href={'https://itunes.apple.com/us/app/farewell-for-uber-and-lyft/id1119039401?mt=8'}
          label={'App Store'}
        />
        <RaisedButton
          className={'store-btn'}
          href={'https://play.google.com/store/apps/details?id=com.farewell&hl=en'}
          label={'Google Play'}
        />
      </div>
    );
  }
}
