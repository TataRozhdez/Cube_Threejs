import React, { useMemo, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { Cube } from '../Cube/Cube'

export const Cubes = ({ number = 3 }) => {
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

  useFrame(() => {
    ref.current.rotation.y = 0.75
  })

  const handleMove = (id) => {
    console.log(id)
  }

  console.log('1', positions)

  return (
    <group ref={ref} dispose={null}>
      {positions.map((pos) => (
        <Cube key={pos.id} position={pos.position} pos={pos} />
      ))}
    </group>
  )
}
