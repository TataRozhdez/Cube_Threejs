import Cube from 'cubejs'
import {
  GET_NEW_CUBE,
  GET_RANDOM_CUBE,
  STOP_GAME
} from './types'

export const getNewCube = () => {
  const cube = new Cube()
  Cube.initSolver()

  return {
    type: GET_NEW_CUBE,
    payload: cube,
  }
}

export const getRandomCube = (cube) => {
  // const random = cube.randomize()
  const random = Cube.random()
  const solve = random.solve()

  return {
    type: GET_RANDOM_CUBE,
    payload: random,
    solve,
  }
}

export const stopCubeGame = () => {
  return {
    type: STOP_GAME,
  }
}
