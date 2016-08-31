import React, { Component } from 'react';
import styles from './home.component.css';

export default class Home extends Component {
  render() {
    var data;
    console.log(this.props);
    if (this.props.image.response)
      data = this.props.image.response.data;
    return (
      <div onClick={this.props.updateImage()} className={styles.container} style={{
        background: `url('data:image;base64,${data || ''}') center center no-repeat`,
        backgroundSize: 'cover'
      }}>
        <div className={styles['menu_inner']}>
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}
