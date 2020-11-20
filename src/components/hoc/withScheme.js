import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';

const withScheme = () => (Wrapped) => {
  return (props) => {
    const [scheme, setScheme] = useState('bright_light');

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

    return <Wrapped {...props} scheme={scheme} />;
  };
};

export default withScheme;
