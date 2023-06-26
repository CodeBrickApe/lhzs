import React, { FC } from 'react'
import { ImageHeaderWrapper, Title } from './styled'

interface Props {
  title?: string
  imageUrl: string
}

const ImageHeader: FC<Props> = ({ title, imageUrl }) => {
  return (
    <ImageHeaderWrapper>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={title} />
      }
      <Title>{title}</Title>
    </ImageHeaderWrapper>
  )
}

export default ImageHeader