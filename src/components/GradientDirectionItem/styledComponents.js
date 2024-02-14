// Style your elements here

import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  width: 110px;
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
