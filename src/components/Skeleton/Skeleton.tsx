import React from 'react'

import { ContainerSkeleton, ContainerSkeletonProps } from './styles'

type SkeletonTypes = 'rect' | 'circle' | 'text'

export type SkeletonProps<T extends SkeletonTypes = SkeletonTypes> = {
  type?: T
  lines?: T extends 'text' ? number : never
  isEndLine?: T extends 'text' ? boolean : never
  color?: ContainerSkeletonProps['background']
  width?: ContainerSkeletonProps['width']
  height?: ContainerSkeletonProps['height']
  style?: React.CSSProperties
}

export default function Skeleton(props: SkeletonProps) {
  const { color, width, height, type, lines, isEndLine, style } = props

  let propsSkeleton: Partial<ContainerSkeletonProps>
  let nextLine: JSX.Element | null = null

  switch (type) {
    case 'circle':
      propsSkeleton = {
        borderRadius: '50%'
      }
      break
    case 'text':
      propsSkeleton = {
        height: 'auto',
        transform: 'scale(1, 0.7)'
      }
      if (lines && lines > 1) {
        nextLine = (
          <Skeleton {...props} lines={lines - 1} isEndLine={lines - 1 === 1} />
        )
      } else if (isEndLine) {
        propsSkeleton.width = '50%'
      }
      break
    case 'rect':
    default:
      propsSkeleton = {}
  }

  return (
    <>
      <ContainerSkeleton
        data-testid="loadingSkeleton"
        borderRadius="5px"
        background={color}
        width={width}
        height={height}
        {...propsSkeleton}
        style={style}
      />
      {nextLine}
    </>
  )
}

Skeleton.defaultProps = {
  color: 'rgb(103 103 103 / 25%)',
  width: 'auto',
  height: 'auto',
  type: 'rect',
  lines: 1,
  isEndLine: false,
  style: undefined
}
