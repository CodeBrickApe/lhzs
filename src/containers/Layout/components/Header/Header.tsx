import { Logo, NavBar, NavBarItem } from './styled'
import Link from 'next/link'
import { Icon } from 'src/components/Icon/Icon'
const Header = () => {

  return (
    <NavBar>
      <Link href="/" passHref>
        <Logo />
      </Link>
      <NavBarItem>
        <Link href="/">
          <a>
            <Icon name='home'></Icon>
            首页
          </a>
        </Link>
        <Link href="/post">
          <a>
            <Icon name='article'></Icon>
            文章
          </a>
        </Link>
        <Link href="/project">
          <a>
            项目
          </a>
        </Link>
        <Link href="/archive">
          <a>
            归档
          </a>
        </Link>
        <Link href='/friendLink'>
          <a>
            友情链接
          </a>
        </Link>
        <Link href='/about'>
          <a>
            关于
          </a>
        </Link>
      </NavBarItem>
    </NavBar>
  )
}
export default Header
