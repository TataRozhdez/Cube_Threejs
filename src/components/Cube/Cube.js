import React from 'react'
import * as THREE from 'three'
import red from '../../texture/red.svg'
import green from '../../texture/green.svg'
import blue from '../../texture/blue.svg'
import white from '../../texture/white.svg'
import orange from '../../texture/orange.svg'
import yellow from '../../texture/yellow.svg'

// Colors:
//  F - Green;
//  R - Orange;
//  L - Red;
//  B - Blue;
//  D - White;
//  U - Yellow.

export const Cube = (props) => {
  const loadManager = new THREE.LoadingManager()
  const loader = new THREE.TextureLoader(loadManager)

  const materials = [
    new THREE.MeshStandardMaterial({
      map: loader.load(red),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(orange),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(white),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(yellow),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(green),
      metalness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(blue),
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
      onClick={(e) => console.log(e)}
    />
  )
}
