import ProductPage from '../../webapp-lib/pages/product-page'

export async function getStaticProps() {
  return {
    props: {
      title: 'Super-riddarost',
      price: '15 kr'
    }
  }
}

export default ProductPage
