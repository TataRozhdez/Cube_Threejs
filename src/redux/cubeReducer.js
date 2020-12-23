import { GET_NEW_CUBE, GET_RANDOM_CUBE } from './types'

const initialState = {
  cube: null,
  random: null,
  solve: null,
  loading: true,
  error: false,
}

export function cubeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_CUBE:
      return {
        ...state,
        cube: action.payload,
        error: false,
        loading: false,
      }
    case GET_RANDOM_CUBE:
      return {
        ...state,
        random: action.payload,
        solve: action.solve,
      }

    default:
      return state
  }
}
