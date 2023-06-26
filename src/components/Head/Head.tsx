import Head from 'next/head'
import React from 'react'
import { useTheme } from 'styled-components'
interface Props {
  title?: string
}
const MetaHead: React.FC<Props> = ({ title }) => {
  const theme = useTheme()
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,shrink-to-fit=no"
      />
       <meta
        name="description"
        content={title}
      />
      <meta name="theme-color" content={theme.background.primary} />
      <link rel="icon" href="/favicon_logo.ico" />
      {/* <link
        href="/icons/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      /> */}
    </Head>
  )
}

export default MetaHead