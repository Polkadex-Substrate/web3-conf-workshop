import { ReactNode } from 'react'

export type Props = {
  isHorizontal?: boolean
  tooltipText?: string
  label: string
  children: ReactNode | string
  spaceBetween?: boolean
}
