import Cube from 'cubejs'

export const getNewCube = () => {
  const cube = Cube.random()
  Cube.initSolver()
  console.log(cube.solve())
  console.log(Cube.fromString(cube))
}
