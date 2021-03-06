import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import { OrbitControls, softShadows } from '@react-three/drei'
import { Cubes } from '../Cubes/Cubes'

softShadows()

export const MyCanvas = ({random}) => {
  // const keys = {
  //   LEFT: 37, //left arrow
  //   UP: 38, // up arrow
  //   RIGHT: 39, // right arrow
  //   BOTTOM: 40, // down arrow
  // }

  return (
    <Canvas shadowMap>
      <Physics gravity={[0, 0, -30]}>
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
            position={[0, -1.5, 0]}
            receiveShadow
          >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' transparent opacity={0.5} />
          </mesh>
          <Cubes random={random} />
        </group>
        <OrbitControls enableZoom={false} enableKeys={true} />
      </Physics>
    </Canvas>
  )
}
