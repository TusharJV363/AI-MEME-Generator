import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'ghost'
}

export function Button({ children, variant = 'primary', className = '', ...rest }: Props) {
  return (
    <button {...rest} className={`btn btn--${variant}${className ? ` ${className}` : ''}`}>
      {children}
    </button>
  )
}
