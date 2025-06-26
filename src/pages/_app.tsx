import NextApp from 'next/app';
import { type ReactElement } from 'react';

import { AuthProvider } from '~/contexts';
import '~/global-styles.scss';

class App extends NextApp {
  public render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

export default App;
