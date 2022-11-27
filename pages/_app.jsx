import React, { useEffect } from 'react';

import { loadIntercom } from 'intercom-next';

import 'styles/index.scss';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    loadIntercom({
      delay: 4000,
      appId: process.env.NEXT_PUBLIC_INTERCOM_ID,
      include_in_development: true,
    });
  }, []);

  return <Component {...pageProps} />;
};

export default App;
