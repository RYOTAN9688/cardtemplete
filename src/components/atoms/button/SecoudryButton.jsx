import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

export const SecondryButton = props => {
  const { children, onClick } = props
  return <Sbutton onClick={onClick}>{children}</Sbutton>
}

const Sbutton = styled(BaseButton)`
  background-color: #40514e;
`
SecondryButton.propTypes = {
  children: PropTypes.string,
}
