import Homepage from '../../webapp-lib/pages/index'

export async function getStaticProps() {
  return {
    props: {
      title: 'Velkommen til den norske siden'
    }
  }
}

export default Homepage
