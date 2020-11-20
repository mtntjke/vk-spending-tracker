import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import bridge from '@vkontakte/vk-bridge';
import { Epic, View, Panel, ConfigProvider } from '@vkontakte/vkui';
import Navbar from './components/Navbar';
import withRouter from './components/hoc/withRouter';
import { appRoutes } from './routes';

import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const [activeStory, setActiveStory] = useState(location.pathname);
  const [scheme, setScheme] = useState('bright_light');

  useEffect(() => {
    const unregisterHistoryListener = history.listen((e) => {
      setActiveStory(e.pathname);
    });

    return () => {
      unregisterHistoryListener();
    };
  }, [history]);

  useEffect(() => {
    const subscribeListener = ({ detail: { type, data } }) => {
      if (type === 'VKWebAppUpdateConfig') {
        const lights = ['bright_light', 'client_light'];
        const isLight = lights.includes(data.scheme);
        setScheme(isLight ? 'bright_light' : 'space_gray');
      }
    };

    bridge.subscribe(subscribeListener);

    return () => {
      bridge.unsubscribe(subscribeListener);
    };
  }, []);

  const pages = appRoutes.map((navItem) => (
    <View key={navItem.path} id={navItem.path} activePanel={navItem.path}>
      <Panel id={navItem.path}>{navItem.component}</Panel>
    </View>
  ));

  return (
    <ConfigProvider scheme={scheme}>
      <Epic
        activeStory={activeStory}
        tabbar={<Navbar activeStory={activeStory} />}
      >
        {pages}
      </Epic>
    </ConfigProvider>
  );
};

export default withRouter(App);
