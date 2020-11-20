import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ROUTES, { defaultRoute } from '../../routes';

const fallbackRoute = (route) => {
  const availableRoutes = Object.values(ROUTES);
  return availableRoutes.includes(route) ? route : defaultRoute;
};

export const RouterContext = React.createContext();

const withRouter = () => (Wrapped) => {
  return (props) => {
    const history = useHistory();
    const location = useLocation();
    const startRoute = fallbackRoute(location.pathname);
    const [activeStory, setActiveStory] = useState(startRoute);

    const fallbackStartRoute = () => {
      if (startRoute !== location.pathname) {
        history.replace(startRoute);
      }
    };

    useEffect(fallbackStartRoute, []);

    useEffect(() => {
      const unregisterHistoryListener = history.listen((e) => {
        setActiveStory(e.pathname);
      });

      return () => {
        unregisterHistoryListener();
      };
    }, [history]);

    const historyPush = (route) => {
      const newRoute = fallbackRoute(route);
      if (newRoute !== location.pathname) {
        history.push(newRoute);
      }
    };

    return (
      <RouterContext.Provider value={{ activeStory, historyPush }}>
        <Wrapped {...props} />
      </RouterContext.Provider>
    );
  };
};

export default withRouter;
