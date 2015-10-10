import Root from './components/Root';
import React from 'react';
import ReactDOM from 'react-dom';

const viewRenderer = () => {
  ReactDOM.render(<Root />, document.querySelector('#container'));
};

export default viewRenderer;
