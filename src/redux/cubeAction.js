import Cube from 'cubejs'
import { GET_NEW_CUBE } from './types'

export const getNewCube = () => {
  const cube = Cube.random()
  Cube.initSolver()

  return {
    type: GET_NEW_CUBE,
    payload: Cube.fromString(cube),
    solve: cube.solve(),
  }
}
