import { InputHTMLAttributes, ReactNode } from 'react'

export type Props = {
  label?: string
  isVertical?: boolean
  error?: string
  children?: ReactNode
  values?: []
  as?: 'textarea' | 'select' | 'input'
  isFull?: boolean
} & InputHTMLAttributes<HTMLInputElement>
