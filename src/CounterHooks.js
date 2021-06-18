import React, { useState, useContext } from 'react';
import { ThemeContext } from './App';

const CounterHooks = ({ initialCount }) => {
  console.log('Render Counter Hooks');
  const [state, setState] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <div>
      <button
        style={style}
        onClick={() => setState((prevState) => prevState - 1)}
      >
        -
      </button>
      <span> {state} </span>
      <button
        style={style}
        onClick={() => setState((prevState) => prevState + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CounterHooks;
