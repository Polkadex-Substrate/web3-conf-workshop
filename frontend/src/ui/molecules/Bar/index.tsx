import * as S from './styles'
import * as T from './types'

export const Bar = ({
  percent = 0,
  background = 'primary',
  isFull = true
}: T.Props) => {
  const percentValue = percent <= 0 || percent >= 101 ? 0 : percent
  return (
    <S.Wrapper percent={percentValue} background={background} isFull={isFull}>
      <div />
    </S.Wrapper>
  )
}
