// Style your elements here

import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CustomHead = styled.h1`
  color: white;
  margin-bottom: 10px;
`
export const CustomPara = styled.p`
  color: wheat;
  margin-top: 10px;
`
export const CustomLists = styled.ul`
  margin: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
`
export const CustomInput = styled.input`
  border: 0px;
  outline: none;
  width: 80px;
  height: 70px;
  margin-top: 10px;
  background-color: transparent;
  cursor: pointer;
`

export const ColorCont = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
export const CustomColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10vh;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  padding: 20px;
  margin-top: 30px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 15px;
`
