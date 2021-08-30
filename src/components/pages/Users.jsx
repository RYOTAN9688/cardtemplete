import React from 'react'
import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'
import { useLocation } from 'react-router'

const users = [...Array(10).keys()].map(val => {
  return {
    id: val,
    name: `ryota${val}`,
    image: 'https://source.unsplash.com/Qb7D1xw28Co',
    email: '123456@gmail.com',
    phone: '000-0000-000',
    company: {
      name: 'テスト株式会社',
    },
    website: 'https://google.com',
  }
})

export const Users = () => {
  const { state } = useLocation()
  const isAdmin = state ? state.isAdmin : false

  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map(user => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </Scontainer>
  )
}

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
