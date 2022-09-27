import cn from 'classnames'
import type { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLDivElement>

const LoadingDots: FC<Props> = ({ className, ...rest }) => {
  return (
    <span
      className={cn('inline-flex text-center items-center', className)}
      {...rest}
    >
      <span className="w-2 h-2 rounded-full mx-0.5 bg-invert animate-pulse [animation-duration:1.4s]" />
      <span className="w-2 h-2 rounded-full mx-0.5 bg-invert animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" />
      <span className="w-2 h-2 rounded-full mx-0.5 bg-invert animate-pulse [animation-duration:1.4s] [animation-delay:0.4s]" />
    </span>
  )
}

export default LoadingDots
