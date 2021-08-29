import React from 'react'
import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'

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
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
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
