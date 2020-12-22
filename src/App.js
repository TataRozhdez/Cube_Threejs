import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
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
    <Canvas>
      <ambientLight />
      <Cube position={[0, 0, 1]} />
      <Cube position={[1, 0, 1]} />
      <Cube position={[2, 0, 1]} />

      <Cube position={[0, 1, 1]} />
      <Cube position={[1, 1, 1]} />
      <Cube position={[2, 1, 1]} />

      <Cube position={[0, 2, 1]} />
      <Cube position={[1, 2, 1]} />
      <Cube position={[2, 2, 1]} />
    </Canvas>
  )
}
