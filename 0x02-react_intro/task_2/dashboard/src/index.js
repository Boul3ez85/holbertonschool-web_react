import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications.js'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
