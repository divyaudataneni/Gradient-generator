import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  CustomHead,
  CustomPara,
  CustomLists,
  CustomInput,
  ColorCont,
  CustomColor,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstClr: '#8ae323',
    secondClr: ' #014f7b',
    activedirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b`,
  }

  onSelectFirst = event => {
    this.setState({firstClr: event.target.value})
  }

  onSelectSecond = event => {
    this.setState({secondClr: event.target.value})
  }

  onChangeDirection = direction => {
    this.setState({activedirection: direction})
  }

  generate = () => {
    const {firstClr, secondClr, activedirection} = this.state
    console.log(activedirection)

    this.setState({
      gradientValue: `to ${activedirection},${firstClr},${secondClr}`,
    })
  }

  render() {
    const {firstClr, secondClr, gradientValue, activedirection} = this.state
    return (
      <AppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <CustomHead>Generate a CSS Color Gradient</CustomHead>
        <CustomPara>Choose Direction</CustomPara>
        <CustomLists>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              direction={each}
              changeDirection={this.onChangeDirection}
              isActive={activedirection === each.value}
            />
          ))}
        </CustomLists>
        <CustomPara>Pick the Colors</CustomPara>
        <ColorCont>
          <CustomColor>
            <p>{firstClr}</p>
            <CustomInput
              type="color"
              id="head"
              name="head"
              value={firstClr}
              onChange={this.onSelectFirst}
            />
          </CustomColor>
          <CustomColor>
            <p>{secondClr}</p>
            <CustomInput
              type="color"
              id="head"
              name="head"
              value={secondClr}
              onChange={this.onSelectSecond}
            />
          </CustomColor>
        </ColorCont>
        <GenerateButton type="button" onClick={this.generate}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
