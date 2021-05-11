import React from 'react'
import 'twin.macro'
import useTranslation from 'next-translate/useTranslation'

import PageWrapper from '../components/PageWrapper'
import Title from '../components/Title'

const ProductPage = ({ title, price }) => {
  const { t } = useTranslation('common')
  return (
    <PageWrapper title={title}>
      <Title>{title}</Title>
      <p tw="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Title subTitle>{t('price')}</Title>
      <p tw="mb-4">
        {price}
      </p>
    </PageWrapper>
  )
}

export default ProductPage
