import { SelectHTMLAttributes } from 'react'

export type Props = {
  data: string[]
  label?: string | number
  isSecondaryBackground?: boolean
} & SelectHTMLAttributes<HTMLSelectElement>
