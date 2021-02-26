import * as React from 'react';
import { AppProps } from 'next/app';

import 'styles/globals.css';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
