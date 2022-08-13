import * as S from './styles'
import * as T from './types'

export const AvailableMessage = ({
  message = 'Not available in Beta',
  background = 'secondaryBackgroundSolid',
  isFull = true,
  children
}: T.Props) => (
  <S.Wrapper isFull={isFull}>
    {children}
    <S.Container background={background}>
      <p>{message}</p>
    </S.Container>
  </S.Wrapper>
)
