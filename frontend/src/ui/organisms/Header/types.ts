export type Props = {
  user?: boolean
  loading?: boolean
  accounts?: Account[]
}

export interface Account {
  address: string
  meta: {
    name?: string
    source?: any
  }
  type: any
}
