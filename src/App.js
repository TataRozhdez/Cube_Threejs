import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { PerspectiveCamera } from 'three'
// import { useSpring, animated } from 'react-spring'
// import { useDrag } from 'react-use-gesture'
import { Cube } from './components/Cube/Cube'
import { getNewCube } from './redux/cubeAction'

// Colors:
//  F - Green;
//  R - Orange;
//  L - Red;
//  B - Blue;
//  D - White;
//  U - Yellow.

export const App = () => {
  useEffect(() => {
    getNewCube()
  }, [])

  return (
    <Canvas className='App'>
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}
      <spotLight position={[10, 10, 10]} color={0xffffff} />
      <spotLight position={[10, 0, 10]} color={0xffffff} />
      <spotLight position={[0, 10, 0]} color={0xffffff} />
      <Cube position={[1, 1, 1]} />
    </Canvas>
  )
}
