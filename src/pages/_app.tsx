import NextApp from 'next/app'

import { AuthProvider } from '~/contexts'
import '~/global-styles.scss'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    )
  }
}

export default App
