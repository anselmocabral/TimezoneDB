import styled from 'styled-components'

export interface ContainerSkeletonProps {
  background: string | undefined
  borderRadius: string | undefined
  width: string | undefined
  height: string | undefined
  transform?: string | undefined
}

export const ContainerSkeleton = styled.span<ContainerSkeletonProps>`
  height: ${({ height }) => height};
  line-height: inherit;
  width: ${({ width }) => width};
  display: block;
  position: relative;
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: hidden;
  transform: ${({ transform }) => transform};

  ::before {
    content: '\\a0';
  }

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, white, transparent);
    opacity: 0.48;
    animation: ContainerKeyFramesSkeletonWave 1200ms
      cubic-bezier(0.1, 0.6, 0.33, 0.71) 100ms infinite none;
    content: '\\a0';
  }

  @keyframes ContainerKeyFramesSkeletonWave {
    from {
      left: -150%;
    }
    to {
      left: 150%;
    }
  }
`

ContainerSkeleton.defaultProps = {
  transform: 'none'
}
