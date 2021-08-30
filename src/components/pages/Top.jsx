import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { useHistory } from 'react-router'

export const Top = () => {
  const history = useHistory()

  const onClickAdmin = () => history.push('/users')
  const onClickGeneral = () => history.push('/users')

  return (
    <Scontainer>
      <h2>TOPページです</h2>
      <PrimaryButton onClick={onClickAdmin}>管理者ユーザー</PrimaryButton>
      <br />
      <br />
      <PrimaryButton onClick={onClickGeneral}>一般ユーザー</PrimaryButton>
    </Scontainer>
  )
}

const Scontainer = styled.div`
  text-align: center;
`
