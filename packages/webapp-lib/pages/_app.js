import React from 'react'

import GlobalStyles from '../helpers/GlobalStyles'
import Layout from '../components/Layout'
import { OptionProvider } from '../hooks/use-options'

const App = ({ Component, pageProps, primaryMenu, options }) => {
  return (
    <OptionProvider options={options}>
      <GlobalStyles />
      <Layout primaryMenu={primaryMenu} options={options}>
        <Component {...pageProps} />
      </Layout>
    </OptionProvider>
  )
}

export default App
