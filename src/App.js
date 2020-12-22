import React, { useEffect, useMemo, useRef } from 'react'
import { Canvas, useThree, extend, useFrame } from 'react-three-fiber'
import {
  OrbitControls,
  softShadows,
  StandardEffects,
  draco,
} from '@react-three/drei'
import { Cube } from './components/Cube/Cube'
import { getNewCube } from './redux/cubeAction'

// Colors:
//  F - Green;
//  R - Orange;
//  L - Red;
//  B - Blue;
//  D - White;
//  U - Yellow.

softShadows()

const Cubes = ({ number = 33 }) => {
  const ref = useRef()
  const positions = useMemo(
    () =>
      [...new Array(number)].map(() => [
        3 - Math.random() * 6,
        Math.random() * 4,
        3 - Math.random() * 6,
      ]),
    []
  )
  useFrame(
    (state) =>
      (ref.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() / 2) * Math.PI)
  )
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Cube key={index} position={pos} />
      ))}
    </group>
  )
}

export const App = () => {
  useEffect(() => {
    getNewCube()
  }, [])

  return (
    <Canvas shadowMap colorManagement>
      <ambientLight />
      <directionalLight
        castShadow
        position={[2.5, 8, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <group position={[0, 0, 0]}>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach='geometry' args={[100, 100]} />
          <shadowMaterial attach='material' transparent opacity={0.4} />
        </mesh>
        {/* <Cube rotation={[10, 10.2, 0]} position={[0, 0, 0]} /> */}

        <Cubes />
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
