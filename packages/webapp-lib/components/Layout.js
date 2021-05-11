import React from 'react'
import tw, { styled } from 'twin.macro'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Container = styled.div(() => [
  tw``,
])

const Wrapper = styled.div(() => [
  tw`px-4  mx-auto`,

  {
    'max-width': '80rem',
  },
])

const NavLink = ({ href, label }) => {
  const router = useRouter()
  const active = router.asPath === href
  return (
    <Link href={href}>
      <a tw="block mr-4 cursor-pointer" css={[active && tw`underline`]}>{label}</a>
    </Link>
  )
}

const Layout = ({ children, primaryMenu, options = {} }) => {
  return (
    <Container>
      <header tw="bg-primary py-4 mb-4">
        <Wrapper css={[tw`flex items-center justify-between`]}>
          <Link href="/">
            <a tw="block mr-4 font-bold text-xl">
              {options.title || 'NextJS app'}
            </a>
          </Link>
          {primaryMenu && (
            <nav tw="flex items-center">
              {primaryMenu.map(({href, label}, i) => (
                <NavLink key={i} href={href} label={label} />
              ))}
            </nav>
          )}
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          {children}
        </Wrapper>
      </main>
    </Container>
  )
}

export default Layout
