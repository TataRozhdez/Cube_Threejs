import React from 'react'
import * as THREE from 'three'
import L from '../../texture/red.svg'
import F from '../../texture/green.svg'
import B from '../../texture/blue.svg'
import D from '../../texture/white.svg'
import R from '../../texture/orange.svg'
import U from '../../texture/yellow.svg'


export const Cube = (props) => {
  const loadManager = new THREE.LoadingManager()
  const loader = new THREE.TextureLoader(loadManager)

  let color = [
    {
      id: 0,
      name: 'U',
      data: U
    },
    {
      id: 1,
      name: 'R',
      data: R
    },
    {
      id: 2,
      name: 'F',
      data: F
    },
    {
      id: 3,
      name: 'D',
      data: D
    },
    {
      id: 4,
      name: 'L',
      data: L
    },
    {
      id: 5,
      name: 'B',
      data: B
    }
  ]

  if (Object.keys(props.pos.newPos).length ) {

    const { oldColor, newColor, reverse } = props.pos.newPos

    const oldColorArr = oldColor.split('')
    const newColorArr = newColor.split('')

    if (reverse === 0) {
        oldColorArr.map((o, index ) => {
          const indexOld = color.find(f => f.name === o).id

          const newMesh = color.find(w => w.name === newColorArr[index])

          const filterColor = color.filter(s => s.id !== indexOld)

          return (
            color = [...filterColor, {
              id: indexOld,
              name: newMesh.name,
              data: newMesh.data,
            }]
          )
        })
    }
    if (reverse === 1) {

    }
    if (reverse === 2) {

    }

  }


  const materials = [
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 4).data),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 1).data),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 3).data),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 0).data),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 2).data),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(color.find(i => i.id === 5).data),
      metalness: 0.1,
    }),
  ]

  const globalGeometry = new THREE.BoxBufferGeometry(1, 1, 1)

  return (
    <mesh
      {...props}
      geometry={globalGeometry}
      material={materials}
      castShadow
      receiveShadow
    />
  )
}
