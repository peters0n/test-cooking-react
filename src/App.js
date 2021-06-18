import React, {useState} from 'react';
import Counter from "./Counter";
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
  console.log('render app');
  const [theme, setTheme] = useState('red');
  return (
    <ThemeContext.Provider value={ { backgroundColor: theme } }>
    <Counter />
    counter hooks
    <CounterHooks initialCount={0} />
    <button onClick={() =>  setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
    </ThemeContext.Provider>

  )
}

export default App;
