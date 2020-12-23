import React, { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls, softShadows } from '@react-three/drei'
import { Cube } from './components/Cube/Cube'
import { getNewCube } from './redux/cubeAction'

softShadows()

const Cubes = ({ number = 3 }) => {
  const ref = useRef()

  const positions = useMemo(() => {
    const pos = []
    const half = (number - 1) / 2

    for (let x = 0; x < number; x++)
      for (let y = 0; y < number; y++)
        for (let z = 0; z < number; z++) {
          pos.push({
            id: `${x}-${y}-${z}`,
            position: [(x - half) * 1, (y - half) * 1, (z - half) * 1],
          })
        }

    return pos
  }, [number])

  // useFrame(
  //   (state) =>
  //     (ref.current.rotation.y =
  //       Math.sin(state.clock.getElapsedTime() / 2) * Math.PI)
  // )

  console.log(positions)

  return (
    <group ref={ref}>
      {positions.map((pos) => (
        <Cube key={pos.id} position={pos.position} />
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
          position={[0, -1.5, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach='geometry' args={[100, 100]} />
          <shadowMaterial attach='material' transparent opacity={0.4} />
        </mesh>
        <Cubes />
      </group>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
