import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LinkCreate from './components/link_create';
import {Links} from '../imports/collections/links';

import './main.html';

const App = () => {
  return (
    <div>
      <Header/>
      <LinkCreate/>
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
