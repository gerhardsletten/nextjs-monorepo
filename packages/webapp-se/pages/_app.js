import App from '../../webapp-lib/pages/_app'

App.getInitialProps = async () => {
  return {
    options: {
      title: 'NextJS (svensk side)'
    },
    primaryMenu: [{
      href: '/',
      label: 'Framsida'
    }, {
      href: '/riddarost',
      label: 'Riddarost'
    }]
  }
}

export default App
