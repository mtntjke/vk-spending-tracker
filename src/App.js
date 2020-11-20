import React, { useContext } from 'react';
import { Epic, View, Panel, ConfigProvider } from '@vkontakte/vkui';
import Navbar from './components/Navbar';
import withRouter, { RouterContext } from './components/hoc/withRouter';
import withScheme from './components/hoc/withScheme';
import { mainStories } from './routes';
import compose from './utils/compose';

import '@vkontakte/vkui/dist/vkui.css';

const App = ({ scheme }) => {
  const { activeStory } = useContext(RouterContext);

  const pages = mainStories.map((navItem) => (
    <View key={navItem.path} id={navItem.path} activePanel={navItem.path}>
      <Panel id={navItem.path}>{navItem.component}</Panel>
    </View>
  ));

  return (
    <ConfigProvider scheme={scheme}>
      <Epic activeStory={activeStory} tabbar={<Navbar />}>
        {pages}
      </Epic>
    </ConfigProvider>
  );
};

export default compose(withRouter(), withScheme())(App);
