// Write your code here
import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, changeDirection, isActive} = props
  const {displayText, value} = direction

  const onChangeDirection = () => {
    changeDirection(value)
  }

  return (
    <li>
      <CustomButton
        type="button"
        onClick={onChangeDirection}
        isActive={isActive}
      >
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
