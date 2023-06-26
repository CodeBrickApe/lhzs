import React, { ComponentType } from 'react'
import { randomSeries } from 'src/shared/utils'
interface Props {
  count: number
  skeletonComponent: ComponentType
}
const SkeletonIterator: React.FC<Props> = ({ count, skeletonComponent: Skeleton }) => {
  return (
    <>
      {Array.from({ length: count }, () => randomSeries(6)).map((val) => (
        <Skeleton key={val} />
      ))}
    </>
  )
}

export default SkeletonIterator