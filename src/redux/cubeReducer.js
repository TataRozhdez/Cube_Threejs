import { GET_NEW_CUBE } from './types'

const initialState = {
  cube: null,
  solve: null,
  loading: true,
  error: false,
}

export function cubeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEW_CUBE:
      return {
        cube: action.payload,
        solve: action.solve,
        error: false,
        loading: false,
      }

    default:
      return state
  }
}
