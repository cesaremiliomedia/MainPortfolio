import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
max-width: 1000px;
 
`

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 1px;
  padding: 0px;
  border-radius: 5px;
  margin: auto;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  object-fit: contain;
  margin-bottom: 3px;
`

const Item = styled(animated.div)`
  width: 100%;
  height: auto;
  max-height: 200px;
  margin: auto;
  padding: 1px;
  background: none;
  opacity: 0;

  will-change: transform, opacity;
`

export { Global, Container, Item }
