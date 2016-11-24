import React, {Component} from 'react';
import './AppBody.css';


/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class AppBody extends Component {
  static displayName = 'AppBody';
  static propTypes = {
    // React.PropTypes
  };

  // constructor(props) {
  //   super(props);
  //   // this.state = {  };
  // }

  render() {
    return (
      <div className='AppBody'>
        <div className='AppBody-details'>
          <div className='AppBody-details-header'>
            {'body header'}
          </div>
          <div className='AppBody-details-body'>
            {'body details'}
          </div>
          <div className='AppBody-store-buttons'>
            {'store buttons'}
          </div>
        </div>
        <div className='AppBody-image'>
        </div>
      </div>
    );
  }
}
