import React, {Component} from 'react';
import './AppBody.css';
import BodyDetails from './BodyDetails/BodyDetails.js';
import BodyDisplay from './BodyDisplay/BodyDisplay.js';

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
        <BodyDetails />
        <BodyDisplay />
      </div>
    );
  }
}
