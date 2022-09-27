import cn from 'classnames'
import mergeRefs from 'react-merge-refs'
import { forwardRef, useRef } from 'react'
import LoadingDots from 'components/ui/LoadingDots'

import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

export type ButtonSize = 'default' | 'slim'
export type ButtonWidth = 'default' | 'small'
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'invert' | 'bordered' | 'clear'

export type ButtonProps = {
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  active?: boolean
  loading?: boolean
  width?: ButtonWidth
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, buttonRef) => {
  const {
    href,
    active,
    children,
    className,
    loading = false,
    disabled = false,
    size = 'default',
    variant = 'default',
    width = 'default',
    ...rest
  } = props

  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const isClickable = !disabled && !loading
  const composedClassName = cn(
    'relative inline-flex items-center justify-center group',
    'font-semibold no-underline',
    'outline-none',
    'focus:ring-2 focus:ring-focus focus:ring-offset',
    'motion-safe:transition-all',
    {
      'w-auto': width === 'small',

      'px-6 py-4 rounded-2xl': size !== 'slim' && variant !== 'clear',
      'px-4 py-2 rounded-lg': size === 'slim' && variant !== 'clear',

      'bg-invert text-invert': variant === 'invert',
      'bg-panel text-default': variant === 'secondary',
      'bg-default text-default': variant === 'default',
      'bg-primary text-default': variant === 'primary',
      'border-[2px] border-invert': variant === 'bordered',
      'bg-accent cursor-not-allowed pointer-events-none': !isClickable,

      'hover:bg-invert': variant !== 'clear',
      '!hover:text-invert': variant === 'bordered',
      'hover:text-primary': isClickable && variant !== 'clear',

      'cursor-pointer': isClickable,
      'text-help opacity-80': disabled,
      'text-transparent': loading,
    },
    className
  )

  if (href) {
    return (
      <a
        href={href}
        {...rest}
        ref={mergeRefs([ref, buttonRef])}
        className={cn(composedClassName, {
          'pointer-events-none': !isClickable,
          'text-transparent': loading,
        })}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      aria-pressed={active}
      className={composedClassName}
      ref={mergeRefs([ref, buttonRef])}
      {...rest}
    >
      {children}

      {loading && typeof window !== 'undefined' && (
        <LoadingDots
          className={cn('absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:!text-primary', {
            'text-invert': variant === 'invert',
            'text-default': variant !== 'invert',
          })}
        />
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
