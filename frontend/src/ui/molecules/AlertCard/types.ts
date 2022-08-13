import { AllHTMLAttributes } from 'react'

export type Props = {
  title: string
  description: string
} & Pick<AllHTMLAttributes<HTMLDivElement>, 'onClick'>
