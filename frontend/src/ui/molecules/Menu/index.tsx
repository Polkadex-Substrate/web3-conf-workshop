import { Icon } from 'molecules'
import { useRouter } from 'next/router'
import Link from 'next/link'

import * as S from './styles'
import { Props } from './types'

export const Menu = ({ menuLinks = [], accountLink }: Props) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      {menuLinks.map((link, index) => {
        return (
          <S.Card key={index} isActive={router.pathname === link.path}>
            <Link href={link.path}>
              <a>{link.title}</a>
            </Link>
          </S.Card>
        )
      })}
      {!!accountLink?.path && (
        <S.Card isActive={router.pathname === accountLink.path}>
          <Link href={accountLink.path}>
            <a>
              <Icon
                name="Profile"
                background="primaryBackground"
                size="medium"
                style={{ marginRight: '0.5rem' }}
              />
              {accountLink.title}
            </a>
          </Link>
        </S.Card>
      )}
    </S.Wrapper>
  )
}
