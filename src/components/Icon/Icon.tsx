import * as React from 'react'
import * as icons from './icons'
import { Icons } from './styled'
export type Icons = typeof icons
export type IconName = keyof Icons

interface IconProps {
  name: IconName
  size?: string
  mr?: string
  ml?: string
  my?: string
  mx?: string
  mb?: string
  mt?: string
}

/**
 * Icon
 */
export const Icon: React.FC<IconProps> = ({ name, size = '1rem', mr, ml, my, mx, mb, mt }) => {
  const { viewBox, id } = icons[name]
  return (
    <Icons size={size} mr={mr} ml={ml} my={my} mx={mx} mb={mb} mt={mt}>
      <svg width={size} height={size} viewBox={viewBox}>
        <use  xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </Icons>

  )
}
