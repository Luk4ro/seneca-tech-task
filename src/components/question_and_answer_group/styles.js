import styled from "styled-components"

export const Container = styled.div`
  background: linear-gradient(180deg, hsla(${props => props.hue}, 63%, 67%, 1) 0%, hsla(${props => props.hue + 18}, 64%, 60%, 1) 100%);
  padding: 10px 5px;
  text-align: center;
  width: 100%;
  height: auto;
`

export const Question = styled.h1`
  color: #FFFFFF;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
`

export const CurrentResult = styled.h2`
  color: #FFFFFF;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
`