import React from 'react'
import { Input } from '../atoms/input/Input'
import { SecondryButton } from '../atoms/button/SecoudryButton'
import styled from 'styled-components'

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <SecondryButton>検索</SecondryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  )
}
const SContainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding-left: 8px;
`
