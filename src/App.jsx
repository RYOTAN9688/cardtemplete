import React from 'react'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondryButton } from './components/atoms/button/SecoudryButton'
import { SearchInput } from './components/molecules/SearchInput'
import { UserCard } from './components/organisms/user/UserCard'
import './styles.css'

const user = {
  name: 'ryota',
  image: 'https://source.unsplash.com/Qb7D1xw28Co',
  email: '123456@gmail.com',
  phone: '000-0000-000',
  company: {
    name: 'テスト株式会社',
  },
  website: 'https://google.com',
}

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondryButton>検索</SecondryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  )
}

export default App
