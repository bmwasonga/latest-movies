import React from 'react';
import ReactDOM from 'react-dom';
import APP from './App';
import { GlobalStyles } from './globalstyles';
import 'normalize.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <APP />
  </>,
  document.getElementById('root')
);
