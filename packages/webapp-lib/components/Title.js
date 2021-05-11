import tw, { styled } from 'twin.macro'

const Title = styled.h1(({ subTitle }) => [
  tw`text-2xl mb-2 font-bold`,
  subTitle ? tw`text-lg` : tw`text-2xl`,
])

export default Title