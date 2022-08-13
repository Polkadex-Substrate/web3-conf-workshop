import { LinkHTMLAttributes, ReactNode } from 'react'

export type Props = {
  children?: ReactNode | string
} & Pick<LinkHTMLAttributes<HTMLLinkElement>, 'href'>
