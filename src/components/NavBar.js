import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to={Routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={Routes.HISTORY}>History</Link>
      </li>
      <li>
        <Link to={Routes.CATEGORIES}>Categories</Link>
      </li>
    </ul>
    <hr />
  </nav>
);
