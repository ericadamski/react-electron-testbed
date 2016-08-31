import React, { Component } from 'react';
import LoadingScreen from '../loading-screen/loading-screen.component';
import styles from './home.component.css';

export default class Home extends Component {
  render() {
    var data, success;
    console.log(this.props.response);
    if (this.props.response) {
      data = this.props.response.data;
      success = this.props.response.success;
    }
    return (
      <div className={styles.container} style={{
        background: (success) ?
          `url('data:image;base64,${data}') center center no-repeat` : '',
        backgroundSize: 'cover'
      }}>
        <LoadingScreen show={this.props.showLoadingScreen} />
        <div className={styles['menu_inner']}>
          <h2>Home</h2>
          <p>{(success) ? 'hurray! a new background image!' : `[${(data) ? data.code : ''}]: Oops, an error :(`}</p>
        </div>
      </div>
    );
  }
}
