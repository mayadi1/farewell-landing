import React, {Component} from 'react';
import './DetailsBody.css';

/**
 * DESCRIPTION
 *
 * @prop {type} PROP - PROP_DESCRIPTION
 */

export default class DetailsBody extends Component {
  static displayName = 'DetailsBody';
  static propTypes = {
    // React.PropTypes
  };

  // constructor(props) {
  //   super(props);
  //   // this.state = {  };
  // }

  render() {
    return (
      <div className='DetailsBody'>
        <p>{'Finding you the cheapest ride, in the least time'}</p>
      </div>
    );
  }
}
