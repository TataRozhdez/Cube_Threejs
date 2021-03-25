import React, {useMemo, useRef} from 'react'
import {useFrame} from 'react-three-fiber'
import {Cube} from '../Cube/Cube'
import {cubeNumEp} from '../../datacube'
import {cubeNumCp} from '../../datacube'

export const Cubes = ({random, number = 3}) => {
  const ref = useRef()

  const positions = useMemo(() => {
    const pos = []
    const half = (number - 1) / 2

    for (let x = 0; x < number; x++)
      for (let y = 0; y < number; y++)
        for (let z = 0; z < number; z++) {
          const id = `${x}-${y}-${z}`
          const newPos = {}

          if (random) {
            if (cubeNumCp.find(a => a.id === id)) {
              const itemCp = cubeNumCp.find(b => b.id === id)
              const newApiCubeNum = random.cp[itemCp.apiNumber]
              const newCube = cubeNumCp.find(c => +c.apiNumber === +newApiCubeNum)

              newPos.oldColor = itemCp.color
              newPos.newColor = newCube.color
              newPos.reverse = random.co[itemCp.apiNumber]

            } else if (cubeNumEp.find(d => d.id === id)) {
              // console.log('111', cubeNumEp.find(f => f.id === id))
            }
          }

          pos.push({
            id ,
            position: [(+x - half) * 1, (+y - half) * 1, (+z - half) * 1],
            newPos
          })
        }

    return pos
  }, [number, random])

  useFrame(() => {
    ref.current.rotation.y = 0.75
  })

  return (
    <group ref={ref} dispose={null} >
      {positions.map((pos, index) => (
        <Cube key={pos.id} position={pos.position} pos={pos} />
      ))}
    </group >
  )
}
