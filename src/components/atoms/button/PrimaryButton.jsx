import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

export const PrimaryButton = props => {
  const { children } = props
  return <Sbutton>{children}</Sbutton>
}

const Sbutton = styled(BaseButton)`
    background-color: #11999e;

`
PrimaryButton.propTypes = {
  children: PropTypes.string,
}
