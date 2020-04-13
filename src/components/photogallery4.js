import React, { useState, useRef } from 'react'
// import Layout from './layout'
import Img from 'gatsby-image'
import { useTransition, useSpring, useChain, config } from 'react-spring'
import { Global, Container, Item } from './styles'
import './display.css'
import FashionGallery from '../hooks/fashionGallery'
function ImagePage() {
  const Folders = FashionGallery()
  const arr = Object.keys(Folders)
    .filter(v => Folders[v] != null)
    .map(key => Folders[key])

  const { Fashion, Portrait, Scenery } = Folders

  const [open, set] = useState(false)
  const [data, setData] = useState()
  function handleGallerySelect(gallery) {
    const galleries = [...arr]
    const index = galleries.indexOf(gallery)
    const filtered = galleries.filter(m => m === galleries[index])
    setData(filtered)
    set(open => !open)
  }
  const springRef = useRef()
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.slow,
    from: { size: '0%' },
    to: { size: open ? '100%' : '0%' },
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.nodes, {
    ref: transRef,
    unique: true,
    trail: 720 / 3,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.4,
  ])

  return (
    <>
      <Global />

      <Container
        onClick={() => set(open => !open)}
        style={{ ...rest, width: size, height: size }}
      >
        {transitions.map(({ item, key, props }) => (
          <>
            {item.nodes.map(image => (
              <Item style={{ ...props }}>
                <div>
                  <Img key={key} fluid={image.childImageSharp.fluid} alt="" />
                </div>
              </Item>
            ))}
          </>
        ))}
      </Container>
      <div
        style={{
          textAlign: `center`,
          display: `block`,
          opacity: open ? 0 : 1,
          marginBottom: '15px',
        }}
        className={open ? 'displayNone' : 'display'}
      >
        <button onClick={() => handleGallerySelect(Fashion)}>
          Event/Fashion
        </button>
        <button className="btn" onClick={() => handleGallerySelect(Portrait)}>
          Portrait
        </button>
        <button className="btn" onClick={() => handleGallerySelect(Scenery)}>
          Scenery
        </button>
      </div>
    </>
  )
}

export default ImagePage
