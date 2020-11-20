import React, { useContext } from 'react';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { mainStories } from '../routes';
import { RouterContext } from './hoc/withRouter';

const Navbar = () => {
  const { activeStory, historyPush } = useContext(RouterContext);

  const tabbarItems = mainStories.map((navItem) => (
    <TabbarItem
      key={navItem.path}
      onClick={() => historyPush(navItem.path)}
      selected={activeStory === navItem.path}
      text={navItem.text}
    >
      {navItem.icon}
    </TabbarItem>
  ));

  return <Tabbar>{tabbarItems}</Tabbar>;
};

export default Navbar;
