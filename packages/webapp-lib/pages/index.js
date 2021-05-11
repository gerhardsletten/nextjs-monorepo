import React from 'react'
import tw from 'twin.macro'
import useTranslation from 'next-translate/useTranslation'

import Title from '../components/Title'
import Button from '../components/Button'
import PageWrapper from '../components/PageWrapper'

const IndexPage = ({ title }) => {
  const { t } = useTranslation('common')
  return (
    <PageWrapper title={title}>
      <Title css={[tw`mb-6!`]}>{title}</Title>
      <Button>{t('helloWorld')}</Button>
    </PageWrapper>
  )
}

export default IndexPage
