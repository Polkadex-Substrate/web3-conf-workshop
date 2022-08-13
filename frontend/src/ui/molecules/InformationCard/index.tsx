import * as T from './types'
import * as S from './styles'

import {
  Icon,
  Tooltip,
  TooltipContent,
  TooltipHeader,
  Heading
} from 'molecules'
import { FlexCenter } from 'atoms'

export const InfomationCard = ({
  tooltipText,
  isHorizontal = false,
  label,
  children,
  spaceBetween
}: T.Props) => {
  const onlyText = typeof children === 'string'
  return (
    <S.Wrapper isHorizontal={isHorizontal} hasTooltip={!!tooltipText}>
      <S.Container isHorizontal={isHorizontal} spaceBetween={spaceBetween}>
        {onlyText ? (
          <Heading color="text">{children}</Heading>
        ) : (
          <div> {children} </div>
        )}
      </S.Container>
      <FlexCenter>
        {tooltipText && (
          <Tooltip>
            <TooltipHeader>
              <Icon name="Info" size="extraSmall" />
            </TooltipHeader>
            <TooltipContent position="bottom" minWidth="25rem">
              {tooltipText}
            </TooltipContent>
          </Tooltip>
        )}
        <p>{label}</p>
      </FlexCenter>
    </S.Wrapper>
  )
}

export const InfomationCardInvert = ({
  tooltipText,
  isHorizontal = false,
  label,
  children,
  spaceBetween
}: T.Props) => {
  const onlyText = typeof children === 'string'
  return (
    <S.Wrapper
      isHorizontal={isHorizontal}
      hasTooltip={!!tooltipText}
      spaceBetween={spaceBetween}
    >
      <S.Header>
        {tooltipText && (
          <Tooltip>
            <TooltipHeader>
              <Icon name="Info" color="white" size="extraSmall" />
            </TooltipHeader>
            <TooltipContent position="top" minWidth="25rem">
              <span>{tooltipText}</span>
            </TooltipContent>
          </Tooltip>
        )}
        <p>{label}</p>
      </S.Header>
      <S.Container isHorizontal={isHorizontal} spaceBetween={spaceBetween}>
        {onlyText ? (
          <Heading color="white">{children}</Heading>
        ) : (
          <div> {children} </div>
        )}
      </S.Container>
    </S.Wrapper>
  )
}
