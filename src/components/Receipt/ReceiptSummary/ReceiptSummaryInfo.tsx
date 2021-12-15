import React, { useContext } from 'react'
import styled from 'styled-components'
import { PaymentsComponentContext } from 'components/Payments/context'

const WrapperStyled = styled.div`
  ${props => props.theme.padding.default}
`

const ComponentStyled = styled.div`
  ${props => props.theme.flex.directionRow}
`

const SubtitleStyled = styled.div`
  ${props => props.theme.font.sizeP}
  ${props => props.theme.font.colorLight}
  word-break: break-all;
`

const LinkStyled = styled.a`
  ${props => props.theme.font.sizeP}
  ${props => props.theme.font.colorLink}
  ${props => props.theme.padding.smallLeft}
`

function ReceiptSummaryInfoComponent() {
  const anypay = useContext(PaymentsComponentContext)

  return (
    <WrapperStyled>
      <ComponentStyled>
        <SubtitleStyled>
          Transaction ID:
          <LinkStyled>{anypay.state.invoice?.hash}</LinkStyled>
        </SubtitleStyled>
      </ComponentStyled>
    </WrapperStyled>
  )
}

export default ReceiptSummaryInfoComponent
