import Cube from 'cubejs'
import { GET_NEW_CUBE, GET_RANDOM_CUBE } from './types'

export const getNewCube = () => {
  const cube = new Cube()
  Cube.initSolver()

  console.log(Cube.scramble())

  return {
    type: GET_NEW_CUBE,
    payload: cube,
  }
}

export const getRandomCube = (cube) => {
  const random = cube.randomize()
  const solve = random.solve()

  return {
    type: GET_RANDOM_CUBE,
    payload: random,
    solve,
  }
}
