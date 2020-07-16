import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

import './main.html';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
