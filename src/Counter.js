import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
  render() {
    console.log('render counter class');
    return (
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button style={style}> - </button>
            <span> 0 </span>
            <button style={style}> + </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
