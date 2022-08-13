import { Colors, Sizes } from 'helpers'

export type Props = {
  size?: Sizes
  color?: Colors
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p'
  children: string
}
