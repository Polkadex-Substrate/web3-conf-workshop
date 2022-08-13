import { useRef } from 'react'

import { Props } from './types'
import * as S from './styles'

export const WalletInput = ({ value }: Props) => {
  const buttonRef = useRef(null)

  const handleOnMouseOut = () => (buttonRef.current.innerHTML = 'Copy')
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    buttonRef.current.innerHTML = 'Copied'
  }
  return (
    <S.Wrapper>
      <input type="text" value={value} disabled />
      <button
        type="button"
        ref={buttonRef}
        onMouseOut={handleOnMouseOut}
        onClick={handleCopy}
      >
        Copy
      </button>
    </S.Wrapper>
  )
}
