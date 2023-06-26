import { FC } from 'react'
import MetaHead from 'src/components/Head/Head'
import Header from './components/Header/Header'
import { Main, Layouts } from './styled'

interface Props {
  title?: string,
  children: React.ReactNode
}

const Layout: FC<Props> = ({ title, children }) => {

  return (
    <Layouts>
      <MetaHead title={title}></MetaHead>
      <Header></Header>
      <Main>{children}</Main>
    </Layouts>
  )
}

export default Layout