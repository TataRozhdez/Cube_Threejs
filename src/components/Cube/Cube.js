import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import red from '../../texture/red.svg'
import green from '../../texture/green.svg'
import blue from '../../texture/blue.svg'
import white from '../../texture/white.svg'
import orange from '../../texture/orange.svg'
import yellow from '../../texture/yellow.svg'

export const Cube = (props) => {
  const mesh = useRef()

  const loadManager = new THREE.LoadingManager()
  const loader = new THREE.TextureLoader(loadManager)

  const materials = [
    new THREE.MeshStandardMaterial({
      map: loader.load(red),
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(orange),
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(yellow),
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(white),
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(green),
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(blue),
    }),
  ]

  const globalGeometry = new THREE.BoxBufferGeometry(1, 1, 1)

  // useFrame(() => {
  // mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // mesh.current.rotation.y = 1
  // })

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={globalGeometry}
      material={materials}
      // onPointerEnter={(e) => console.log('enter')}
      // onClick={(e) => console.log('click')}
      // onDoubleClick={(e) => console.log('double click')}
      // onWheel={(e) => console.log('wheel spins')}

      // onPointerMove={(e) => console.log('move')}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    />
  )
}
