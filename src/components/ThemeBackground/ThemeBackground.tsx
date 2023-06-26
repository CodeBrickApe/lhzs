import React from 'react'
import { transitionMixin } from 'src/styled/mixins'
import styled from 'styled-components'
import { Starts, StartsThree, StartsTwo } from 'src/styled/starryBackground'
import ShootingStar from 'src/components/ShootingStar/ShootingStar'

interface Props {
  Component: any,
  pageProps: any,
  theme: string
}
interface BgProps {
  lightTheme: boolean
}

export const StratsBox = styled.div<BgProps>`
  position: relative;
  overflow: hidden ;
  width: 100%;
`

const ThemeBackground: React.FC<Props> = ({ Component, pageProps, theme }) => {

  return (
    <StratsBox lightTheme={theme === 'light'}>
      {
        theme === 'light' ? '' : <>
          <Starts></Starts>
          <StartsTwo></StartsTwo>
          <StartsThree></StartsThree>
          <ShootingStar></ShootingStar>
        </>
      }
      <Component {...pageProps} />
    </StratsBox>
  )
}

export default ThemeBackground