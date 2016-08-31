import React, { Component } from 'react';
import styles from './loading-screen.component.css';

export default class LoadingScreen extends Component {
  render() {
    return (
      <div className={styles['loading-container'] + ' ' +
        ((this.props.show) ? '' : 'hidden')}>
        <div className={styles['loading-spinner']} />
      </div>
    );
  }
}
