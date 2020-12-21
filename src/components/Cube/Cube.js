import React, { useEffect, useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

export const Cube = (props) => {
  const mesh = useRef()

  const globalGeometry = new THREE.BoxGeometry(1, 1, 1)
  const globalMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: THREE.FaceColors,
  })

  useEffect(() => {
    globalGeometry.faces[0].color.set(new THREE.Color(0x07a42e))
    globalGeometry.faces[0 + 1].color.set(new THREE.Color(0x07a42e))

    const red = new THREE.Color(0xea1e00)
    const green = new THREE.Color(0x07a42e)
    const yellow = new THREE.Color(0xefff00)
    const blue = new THREE.Color(0x1d00ff)
    const orange = new THREE.Color(0xf69e0e)
    const white = new THREE.Color(0xffffff)

    const colors = [red, green, yellow, blue, orange, white]

    globalGeometry.faces[0].color.set(colors[0])
    globalGeometry.faces[1].color.set(colors[0])

    globalGeometry.faces[2].color.set(colors[1])
    globalGeometry.faces[3].color.set(colors[1])

    globalGeometry.faces[4].color.set(colors[2])
    globalGeometry.faces[5].color.set(colors[2])

    globalGeometry.faces[6].color.set(colors[3])
    globalGeometry.faces[7].color.set(colors[3])

    globalGeometry.faces[8].color.set(colors[4])
    globalGeometry.faces[9].color.set(colors[4])

    globalGeometry.faces[10].color.set(colors[5])
    globalGeometry.faces[11].color.set(colors[5])
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
