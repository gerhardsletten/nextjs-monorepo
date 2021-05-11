import React from 'react'
import Head from 'next/head'

import useOption from '../hooks/use-options'

const PageWrapper = ({ children, title }) => {
  const options = useOption()
  return (
    <>
      <Head>
        <title>{title} - {options.title}</title>
      </Head>
      {children}
    </>
  )
}

export default PageWrapper
