import React, { useMemo, useRef } from 'react'
import { useState } from 'react'
import { useFrame } from 'react-three-fiber'
import { Cube } from '../Cube/Cube'

/*
  CUBES ( id = number )
 0-0-0 = 01     1-0-0 = 10      2-0-0 = 19
 0-0-1 = 02     1-0-1 = 11      2-0-1 = 20
 0-0-2 = 03     1-0-2 = 12      2-0-2 = 21
 0-1-0 = 04     1-1-0 = 13      2-1-0 = 22
 0-1-1 = 05     1-1-1 = 14      2-1-1 = 23
 0-1-2 = 06     1-1-2 = 15      2-1-2 = 24
 0-2-0 = 07     1-2-0 = 16      2-2-0 = 25
 0-2-1 = 08     1-2-1 = 17      2-2-1 = 26
 0-2-2 = 09     1-2-2 = 18      2-2-2 = 27

 CENTER ( apiNumber = apiColor = myNumber)
 0 = U yellow = 05
 1 = R orange = 11
 2 = F green  = 15
 3 = D white  = 23
 4 = L red    = 17
 5 = B blue   = 13

 CP ( (серединки) apiNumber = apiSymb = myNumber )
 0 = UR = 02     |       7 = DB = 22
 1 = UF = 06     |       8 = FR = 12
 2 = UL = 08     |       9 = FL = 18
 3 = UB = 04     |       10 = BL = 16
 4 = DR = 20     |       11 = BR = 10
 5 = DF = 24     |
 6 = DL = 26     |

 EP ( (углы) apiNumber = apiSymb = myNumber )
 0 = URF = 03
 1 = UFL = 09
 2 = ULB = 07
 3 = UBR = 01
 4 = DFR = 21
 5 = DLF = 27
 6 = DBL = 25
 7 = DRB = 19

              D
             +------------+
             | 19  22  25 |
             |            |
             | 20  23  26 |
             |            |
 R           | 21  24  27 | L            B
+------------+------------+------------+------------+
| 19  20  21 | 21  24  27 | 27  26  25 | 25  22  19 |
|            |            |            |            |
| 10  11  12 | 12  15  18 | 18  17  16 | 16  13  10 |
|            |            |            |            |
| 01  02  03 | 03  06  09 | 09  88  07 | 07  04  01 |
+------------+------------+------------+------------+
             | 03  06  09 |
             |            |
             | 02  05  08 |
             |            |
             | 01  04  07 |
           u +------------+
*
* */

export const Cubes = ({ random, number = 3 }) => {
  const ref = useRef()

  const [hovered, setHovered] = useState([])

  const positions = useMemo(() => {
    const pos = []
    const half = (number - 1) / 2

    for (let x = 0; x < number; x++)
      for (let y = 0; y < number; y++)
        for (let z = 0; z < number; z++) {
          if (random) {
            pos.push({
              id: `${x}-${y}-${z}`,
              position: [(x - half) * 1, (y - half) * 1, (z - half) * 1],
            })
          } else {
            pos.push({
              id: `${x}-${y}-${z}`,
              position: [(x - half) * 1, (y - half) * 1, (z - half) * 1],
            })
          }
        }

    return pos
  }, [number, random])

  useFrame(() => {
    ref.current.rotation.y = 0.75
  })

  const handleMove = (id) => {
    console.log(id)
    setHovered(id)
  }

  console.log('1', positions)
  console.log('2', random)

  return (
    <group ref={ref} dispose={null}>
      {positions.map((pos, index) => (
        <Cube key={pos.id} position={pos.position} pos={pos} />
      ))}
    </group>
  )
}
