import * as S from './styles'
import { Props } from './types'

import { Icon } from 'molecules'

export const SelectOptions = ({
  data = [],
  label,
  isSecondaryBackground = false,
  onChange,
  ...props
}: Props) => (
  <S.Wrapper
    withElement={!!label}
    isSecondaryBackground={isSecondaryBackground}
  >
    {onChange && (
      <S.Select>
        <select {...props}>
          {data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <Icon name="ArrowBottom" />
      </S.Select>
    )}
    <span>{label}</span>
  </S.Wrapper>
)
