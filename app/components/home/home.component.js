import React, { Component } from 'react';
import LoadingScreen from '../loading-screen/loading-screen.component';
import styles from './home.component.css';

export default class Home extends Component {
  render() {
    var data;
    console.log(this.props.response);
    if (this.props.response)
      data = this.props.response.data;
    return (
      <div className={styles.container} style={{
        background: (this.props.response.success) ?
          `url('data:image;base64,${data}') center center no-repeat` : '',
        backgroundSize: 'cover'
      }}>
        <LoadingScreen show={this.props.showLoadingScreen} />
        <div className={styles['menu_inner']}>
          <h2>Home</h2>
          <p>{(this.props.response.success) ? 'hurray! a new background image!' : `[${this.props.response.data.code}]: Oops, an error :(`}</p>
        </div>
      </div>
    );
  }
}
