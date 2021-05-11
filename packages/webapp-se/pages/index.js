import Homepage from '../../webapp-lib/pages/index'

export async function getStaticProps() {
  return {
    props: {
      title: 'Välkommen till den svenska webbplatsen'
    }
  }
}

export default Homepage
