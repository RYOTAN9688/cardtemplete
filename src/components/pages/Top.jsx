import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Top = () => {
  return (
    <Scontainer>
      <h2>TOPページです</h2>
      <PrimaryButton>管理者ユーザー</PrimaryButton>
      <br />
      <br />
      <PrimaryButton>一般ユーザー</PrimaryButton>
    </Scontainer>
  )
}

const Scontainer = styled.div`
  text-align: center;
`
