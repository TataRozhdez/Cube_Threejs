import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import { getNewCube } from './redux/cubeAction'
import { MyCanvas } from './components/MyCanvas/MyCanvas'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

export const App = () => {
  const dispatch = useDispatch()
  const { cube, solve, error, loading } = useSelector((state) => state)

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))

  useEffect(() => {
    dispatch(getNewCube())
  }, [])

  return (
    <div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      className='my-canvas'
    >
      {error && <h1>Somthing go wrong...</h1>}
      {loading && <h1>Loading...</h1>}
      {cube && solve && (
        <animated.div
          style={{ transform: props.xy.interpolate(trans1) }}
          className='my-canvas'
        >
          <MyCanvas />
        </animated.div>
      )}
    </div>
  )
}
