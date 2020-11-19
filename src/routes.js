import React from 'react';

import SpendingPage from './pages/SpendingPage';
import IncomePage from './pages/IncomePage';
import HistoryPage from './pages/HistoryPage';
import PlanningPage from './pages/PlanningPage';
import SettingsPage from './pages/SettingsPage';

import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';

const ROUTES = {
  SPENDING: '/',
  INCOME: '/income',
  HISTORY: '/history',
  PLANNING: '/planning',
  SETTINGS: '/settings',
};

export const appRoutes = [
  {
    path: ROUTES.SPENDING,
    text: 'Расход',
    icon: <Icon28NewsfeedOutline />,
    page: <SpendingPage />,
  },
  {
    path: ROUTES.INCOME,
    text: 'Доход',
    icon: <Icon28ServicesOutline />,
    page: <IncomePage />,
  },
  {
    path: ROUTES.HISTORY,
    text: 'История',
    icon: <Icon28MessageOutline />,
    page: <HistoryPage />,
  },
  {
    path: ROUTES.PLANNING,
    text: 'Планирование',
    icon: <Icon28ClipOutline />,
    page: <PlanningPage />,
  },
  {
    path: ROUTES.SETTINGS,
    text: 'Настройки',
    icon: <Icon28UserCircleOutline />,
    page: <SettingsPage />,
  },
];

export default ROUTES;
