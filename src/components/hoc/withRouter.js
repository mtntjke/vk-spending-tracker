import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const withRouter = (Wrapped) => {
  return (props) => {
    return (
      <Router>
        <Wrapped {...props} />
      </Router>
    );
  };
};

export default withRouter;
