import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';
import { appRoutes } from '../routes';

const Navbar = ({ activeStory }) => {
  const history = useHistory();

  const onStoryChange = (e) => {
    history.push(e.currentTarget.dataset.story);
  };

  const tabbarItems = appRoutes.map((navItem) => (
    <TabbarItem
      key={navItem.path}
      onClick={onStoryChange}
      selected={activeStory === navItem.path}
      data-story={navItem.path}
      text={navItem.text}
    >
      {navItem.icon}
    </TabbarItem>
  ));

  return <Tabbar>{tabbarItems}</Tabbar>;
};

export default Navbar;
