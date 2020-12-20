import React, { useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export const Cube = (props) => {
  const mesh = useRef()

  const globalGeometry = new THREE.BoxGeometry(1, 1, 1)
  const globalMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors,
  })

  useEffect(() => {
    globalGeometry.faces[0].color.set(new THREE.Color(0x07a42e))
    globalGeometry.faces[0 + 1].color.set(new THREE.Color(0x07a42e))

    const red = new THREE.Color(0xea1e00)
    const green = new THREE.Color(0x07a42e)
    const yellow = new THREE.Color(0xfef145)
    const blue = new THREE.Color(0x170c86)
    const orange = new THREE.Color(0xf69e0e)
    const white = new THREE.Color(0xffffff)

    const colors = [red, green, yellow, blue, orange, white]

    colors.map((c, index) => {
      console.log(c, index)
      globalGeometry.faces[index].color.set(c)
      globalGeometry.faces[index + 1].color.set(c)
      return true
    })

    // for (let i = 0; i < globalGeometry.faces.length; i++) {
    //   globalGeometry.faces[i].color.set(colors[i])
    //   globalGeometry.faces[i + 1].color.set(colors[i])
    // }
  }, [globalGeometry.faces])

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      geometry={globalGeometry}
      material={globalMaterial}
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
