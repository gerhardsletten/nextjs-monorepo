import ProductPage from '../../webapp-lib/pages/product-page'

export async function getStaticProps() {
  return {
    props: {
      title: 'Super-brunost',
      price: '10 kr'
    }
  }
}

export default ProductPage
