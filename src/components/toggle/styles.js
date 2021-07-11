import styled from 'styled-components'
import {
  getXTranslation,
  getYTranslation,
  getTopBorderRadius,
  getBottomBorderRadius
} from './helpers'

export const toggleHeight = 80
export const toggleBorderSize = 1
export const borderRadius = toggleHeight / 2

export const Toggle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  min-height: ${toggleHeight}px;
  height: auto;
  width: 100%;
  margin: 14px 0;
  border-radius: ${borderRadius}px;
  border: #000000 ${toggleBorderSize}px solid;
  cursor: pointer;
`

export const Notch = styled.div`
  position: absolute;
  width: ${props => props.answersAreStacked ? '100%': '50%'};
  top: 0;
  left: 0;
  height: ${toggleHeight}px;
  border-radius: ${props => getTopBorderRadius(props)}px
                 ${props => getTopBorderRadius(props)}px
                 ${props => getBottomBorderRadius(props)}px
                 ${props => getBottomBorderRadius(props)}px;
  background-color: hsla(${props => props.hue + 10}, 58%, 78%, 1);
  box-shadow: 0px 0px 8px -2px hsla(${props => props.hue + 10}, 58%, 38%, 1);
  transition: all 0.3s ease;
  transform: ${props => `translate(${getXTranslation(props)}, ${getYTranslation(props)})}`};
`

export const Answer = styled.span`
  display: flex;
  flex: 1 0 calc(50% - 5px);
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  height: ${toggleHeight}px;
  font-family: Mulish;
  font-weight: bold;
  font-size: 24px;
  color: hsla(${props => props.hue}, 10%, 30%, 1);;
  z-index: 1;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`