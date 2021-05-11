import App from '../../webapp-lib/pages/_app'

App.getInitialProps = async () => {
  return {
    options: {
      title: 'NextJS (norsk side)'
    },
    primaryMenu: [{
      href: '/',
      label: 'Forside'
    }, {
      href: '/brunost',
      label: 'Brunost'
    }]
  }
}

export default App
