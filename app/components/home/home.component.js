import React, { Component } from 'react';
import styles from './home.component.css';


export default class Home extends Component {

  render() {
    console.log(this);
    return (
      <div>
        <div className={styles.container}>
          <h2>Home</h2>
          <p> { this.props.fetching } </p>
        </div>
      </div>
    );
  }
}
