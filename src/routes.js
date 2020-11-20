import React from 'react';

import SpendingPage from './pages/SpendingPage';
import IncomePage from './pages/IncomePage';
import HistoryPage from './pages/HistoryPage';
import PlanningPage from './pages/PlanningPage';
import SettingsPage from './pages/SettingsPage';

import Icon28MoneyTransferOutline from '@vkontakte/icons/dist/28/money_transfer_outline';
import Icon28CoinsOutline from '@vkontakte/icons/dist/28/coins_outline';
import Icon28HistoryBackwardOutline from '@vkontakte/icons/dist/28/history_backward_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

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
    icon: <Icon28MoneyTransferOutline />,
    component: <SpendingPage />,
  },
  {
    path: ROUTES.INCOME,
    text: 'Доход',
    icon: <Icon28CoinsOutline />,
    component: <IncomePage />,
  },
  {
    path: ROUTES.HISTORY,
    text: 'История',
    icon: <Icon28HistoryBackwardOutline />,
    component: <HistoryPage />,
  },
  {
    path: ROUTES.PLANNING,
    text: 'Планирование',
    icon: <Icon28CalendarOutline />,
    component: <PlanningPage />,
  },
  {
    path: ROUTES.SETTINGS,
    text: 'Настройки',
    icon: <Icon28SettingsOutline />,
    component: <SettingsPage />,
  },
];

export default ROUTES;
