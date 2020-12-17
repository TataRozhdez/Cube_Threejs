import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export const Cube = (props) => {
  const red = new THREE.Color('#EA1E00')
  const green = new THREE.Color('#07A42E')
  const yellow = new THREE.Color('#FEF145')
  const blue = new THREE.Color('#170C86')
  const orange = new THREE.Color('#F69E0E')
  const white = new THREE.Color('#FFFFFF')

  const colors = [red, green, yellow, blue, orange, white]

  const geometry = new THREE.BoxGeometry()

  // colors.map((c, index) => console.log(index, c))

  // geometry.faces[1].color.setHex(red)

  // for (let i = 0; i < 5; i++) {
  // geometry.faces[4 * i].color = colors[i]
  // geometry.faces[4 * i + 1].color = colors[i]
  // geometry.faces[4 * i + 2].color = colors[i]
  // geometry.faces[4 * i + 3].color = colors[i]
  // }

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  const ref = useRef

  return (
    <mesh
      {...props}
      ref={mesh}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} ref={ref} />

      <meshStandardMaterial color={white} />
    </mesh>
  )
}
