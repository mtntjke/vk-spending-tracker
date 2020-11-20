import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';

bridge.send('VKWebAppInit');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
if (process.env.NODE_ENV === 'development') {
  import('./utils/eruda').then(({ default: eruda }) => {});
}
